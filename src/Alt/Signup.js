import "../style/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const fullname = firstname + " " + lastname;

    const senderMan = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        fullname: fullname,
      }),
    });

    if (senderMan.status == 200) {
      navigate("/");
    }
    if (senderMan.status == 202) {
      navigate("/");
    }
    if (senderMan.status == 500) {
      const response = senderMan.json();
      console.log(response);
    }
  }
  return (
    <div className="SignupPage">
      <div className="SignupImages">
        <img src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg" alt="Signup Images" />
      </div>
      <div id="signup">
        <div className="SignupContent">
          <a id="Title">Create an account</a>
          <p>Already have an account? <a href="/">Log in</a></p>
          <form onSubmit={handleSubmit} id="form">
            <div className="fullname">
              <input type="text" id="firstname" placeholder="First Name" required />
              <input type="text" id="lastname" placeholder="Last Name" required />
            </div>
            <input type="text" id="username" placeholder="Username" required />
            <input type="email" id="email" placeholder="Email" required />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Create Account</button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Signup;
