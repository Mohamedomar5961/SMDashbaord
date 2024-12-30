import "../style/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const senderMan = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (senderMan.status == 200) {
      const response = senderMan.json();
      navigate("/");
    }
    if (senderMan.status == 202) {
      const response = senderMan.json();
      navigate("/");
    }
    if (senderMan.status == 500) {
      const response = senderMan.json();
      console.log(response);
    }
  }
  return (
    <div className="Signup">
      <div id="signup">
        <a id="Title">Sign up</a>
        <form onSubmit={handleSubmit} id="form">
          <input type="text" id="username" placeholder="Username" required />
          <input type="email" id="email" placeholder="Email" required />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
