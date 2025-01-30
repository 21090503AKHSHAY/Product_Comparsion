import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('User created successfully:', result);
        navigate('/login'); // Redirect to login page after signup
      } else {
        console.error('Signup error:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit"><Link to="/login">Sign Up</Link></button>
      </form>

      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}
