import React, { useState } from 'react';
import { manualLogin, manualRegister } from '../../TabManager_Reminder/src/firebaseHelper';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { user, token } = await manualLogin(email, password);
      console.log("User Info:", user);
      console.log("User Token:", token);
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const { user, token } = await manualRegister(email, password);
      console.log("Registered User Info:", user);
      console.log("User Token:", token);
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div>
      <h2>Login or Register</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default LoginComponent;
