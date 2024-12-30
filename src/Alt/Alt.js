async function handleSubmit(e) {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  if (username && password) {
    try {
      // Send the username and password to the server
      const response = await fetch("http://localhost:3001/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      // Log the response from the server
      if (response.ok) {
        const data = await response.json();
        console.log("Server response", data);
        const users = await fetch("http://localhost:3001/users");
        const usersData = await users.json();
        console.log("Users", usersData);
      } else {
        console.error("server error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    console.log("%cIncorrect username or password", "color: red");
  }
}

export default handleSubmit;
