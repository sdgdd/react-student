import { NavLink, useLocation } from "react-router-dom";
import Alter from "./components/Alter.jsx";
import HomeRouter from "./router/HomeRouter.jsx";

function App() {
  const location = useLocation();
  return (
    <div>
      <nav
        style={{ marginBottom: "16px" }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <span className="navbar-brand" href="./">
          学生管理系统
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink to="/home" className="nav-link">
                主页
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                关于我们
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/AddOrEdit" className="nav-link">
                添加用户
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {location?.state?.message ? (
        <Alter
          message={location.state.message}
          type={location.state.type}
        ></Alter>
      ) : null}

      <div style={{ padding: "0 64px" }}>
        <HomeRouter></HomeRouter>
      </div>
    </div>
  );
}

export default App;
