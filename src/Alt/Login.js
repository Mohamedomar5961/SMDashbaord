import { useNavigate } from "react-router-dom";
import "../style/Login.css";

function Login() {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const senderMan = await fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: username,
        pass_word: password,
      }),
    });
    if (senderMan.status == 200) {
      const response = await senderMan.json();
      console.log(response);
      navigate("/dashboard");
    }
    if (senderMan.status == 404) {
      const response = await senderMan.json();
      console.log(response);
    }
    if (senderMan.status == 500) {
      const response = await senderMan.json();
      console.log(response);
    }
  }

  return (
    <div className="Login">
      <div id="signin">
        <a id="Title">Sign In</a>
        <form onSubmit={handleSubmit} id="form">
          <input type="text" id="username" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <button type="submit">Login</button>
          <a href="/signup">Sign Up</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
