const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session'); // Import express-session

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
app.use(express.json());

// Session middleware
app.use(session({
  secret: 'ali-secret',
  resave: false,
  saveUninitialized: true,
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/oauth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define User Schema
const User = mongoose.model('User', new mongoose.Schema({
    email: String,
    name: String,
    accessToken: String,
}));

// Passport Configuration
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/callback',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const userData = {
            email: profile.emails[0].value,
            name: profile.displayName,
            accessToken,
        };
        await User.findOneAndUpdate({ email: userData.email }, userData, { upsert: true });
        done(null, userData);
    } catch (error) {
        done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.cookie('accessToken', req.user.accessToken, { httpOnly: true });
    res.redirect('http://localhost:3001/dashboard');
});

app.get('/user', (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).send('Not authenticated');
    }
    res.send({ token });
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
