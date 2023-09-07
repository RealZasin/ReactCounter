import React, { useState } from "react";

export function Form() {
  // Define state variables to store the username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handler to be called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior (page reload)
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <h3>Logg Inn</h3>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
