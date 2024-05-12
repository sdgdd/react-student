import {
  Routes,
  Route,
  Navigate,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AddOrEdit from "./components/AddOrEdit.jsx";
import Alter from "./components/Alter.jsx";
import Detail from "./components/Detail.jsx";

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
                首页
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                关于
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/AddOrEdit" className="nav-link">
                添加
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
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/AddOrEdit" element={<AddOrEdit />} />
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
