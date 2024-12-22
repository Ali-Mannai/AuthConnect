import React from 'react';

function Home() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <div>
      <h1>Bienvenue</h1>
      <button onClick={handleLogin}>Se connecter avec Google</button>
    </div>
  );
}

export default Home;
