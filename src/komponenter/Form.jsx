import { useState } from "react";

export function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Logg Inn</h3>
        <div className="fixit">
          <div className="fixitChild">
            <label>Username:</label>
            <input
              className="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="fixitChild">
            <label>Password:</label>
            <input
              className="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="SubmitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}
