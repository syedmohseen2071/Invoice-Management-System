import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    // Temporary save (for testing)
    localStorage.setItem("user", JSON.stringify({ name, email }));

    alert("Signup successful");
    navigate("/");
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={signup}>Register</button>
    </div>
  );
}

