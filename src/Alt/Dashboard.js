import { useLocation } from "react-router-dom";
import "../style/Dashboard.css";
import { useState, useEffect } from "react";
import { ReactComponent as DashboardIcon } from "../icons/Dashboard-Icon.svg";
import { ReactComponent as AnalyticsIcon } from "../icons/Analytics-Icon.svg";
import { ReactComponent as PostsIcon } from "../icons/Post-Icon.svg";
import { ReactComponent as AccountsIcon } from "../icons/Account-Icon.svg";

function Dashboard() {
  const [info, setInfo] = useState({});
  const [focus, setFocus] = useState("");
  const userInfo = {};
  const location = useLocation();
  const { id } = location.state || {};

  function focuser() {
    if (focus === 1) {
    }
  }
  async function getPerson() {
    const response = await fetch("http://localhost:3001/dashboard");
    console.log("Hello::::: ");
    if (response.ok) {
      const data = await response.json();
      console.log("Hello::::: ", data);
      // setInfo(data);
    } else {
      console.log("Something went wront");
    }
  }
  useEffect(() => {
    getPerson();
    // setFocus(localStorage.getItem("page"));
  }, []);

  var name;
  var email;
  if (info) {
    // name = info[0].username;
    // email = info[0].email;
  } else {
    name = "";
    email = "";
  }
  function focusUpdate(num, item) {
    localStorage.setItem("page", num);
    setFocus(localStorage.getItem("page"));
  }

  const style = (num) => {
    return num == focus
      ? { backgroundColor: "var(--lime)", color: "var(--dark)" }
      : { backgroundColor: "var(--dark)", color: "var(--lime)" };
  };

  const svgSty = () => {
    const dashRects = document.getElementsByClassName("dashRect");
    const anaRects = document.getElementsByClassName("anaRect");
    const postRects = document.getElementsByClassName("postRect");
    const acRects = document.getElementsByClassName("acRect");
    if (focus == 1) {
      Array.from(dashRects).forEach((rect) => {
        rect.style.stroke = "var(--dark)";
      });
    } else {
      Array.from(dashRects).forEach((rect) => {
        rect.style.stroke = "var(--lime)";
      });
    }

    if (focus == 2) {
      Array.from(anaRects).forEach((rect) => {
        rect.style.stroke = "var(--dark)";
      });
    } else {
      Array.from(anaRects).forEach((rect) => {
        rect.style.stroke = "var(--lime)";
      });
    }
    if (focus == 3) {
      Array.from(postRects).forEach((rect) => {
        rect.style.stroke = "var(--dark)";
      });
    } else {
      Array.from(postRects).forEach((rect) => {
        rect.style.stroke = "var(--lime)";
      });
    }
    if (focus == 4) {
      Array.from(acRects).forEach((rect) => {
        rect.style.stroke = "var(--dark)";
      });
    } else {
      Array.from(acRects).forEach((rect) => {
        rect.style.stroke = "var(--lime)";
      });
    }
  };

  svgSty();

  return (
    <div className="Dashboard">
      <div className="sidebar">
        <div className="profile_info">
          <div className="profile">
            <img
              src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/e9b68ea9-5883-4334-82f3-9504663a0a86/51360148-a7ad-4e47-9dc0-3b4cae073c24.png"
              alt="profile"
            />
            <div className="name_type">
              <div className="profile_name">{name}</div>
              <div className="profile_type">Instagram</div>
            </div>
          </div>
          <div className="info">
            <div>
              <p>4.7k</p>
              <p>Followers</p>
            </div>
            <div>
              <p>867</p>
              <p>Following</p>
            </div>
            <div>
              <p>190</p>
              <p>Posts</p>
            </div>
          </div>
        </div>
        <div className="link_container">
          <button
            className="dashboardBtn"
            onClick={() => focusUpdate(1)}
            style={style(1)}
          >
            <DashboardIcon />
            <p>Dashboard</p>
          </button>
          <button
            className="analyticsBtn"
            onClick={() => focusUpdate(2)}
            style={style(2)}
          >
            <AnalyticsIcon />
            <p>Analytics</p>
          </button>
          <button
            className="postsBtn"
            onClick={() => focusUpdate(3)}
            style={style(3)}
          >
            <PostsIcon />
            <p>Posts</p>
          </button>
          <button
            className="accountsBtn"
            onClick={() => focusUpdate(4)}
            style={style(4)}
          >
            <AccountsIcon />
            <p>Accounts</p>
          </button>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default Dashboard;
