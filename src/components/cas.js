import { Link } from "react-router-dom";

const Cas = ({ type }) => {
  // ----CASTLES----

  if (type === "Cas") {
    return (
      <Link to="/castle" className="cas">
        {" "}
        <div className="casTop"></div>
        <div className="casBottom">
          <h1>Castles</h1>
        </div>
      </Link>
    );
  }

  // ----ARMIES----

  if (type === "cAs") {
    return (
      <Link to="/army" className="cas">
        <div className="casTop"></div>
        <div className="casBottom">
          <h1>Armies</h1>
        </div>
      </Link>
    );
  }

  // ----SOLDIERS----

  if (type === "caS") {
    return (
      <Link to="/soldier" className="cas">
        <div className="casTop"></div>
        <div className="casBottom">
          <h1>Soldiers</h1>
        </div>
      </Link>
    );
  }
};

export default Cas;
