const Cas = ({ type }) => {
  // ----CASTLES----

  if (type === "Cas") {
    return (
      <button className="cas">
        <div className="casTop"></div>
        <div className="casBottom">
          <h1>Castles</h1>
        </div>
      </button>
    );
  }

  // ----ARMIES----

  if (type === "cAs") {
    return (
      <button className="cas">
        <div className="casTop"></div>
        <div className="casBottom">
          <h1>Armies</h1>
        </div>
      </button>
    );
  }

  // ----SOLDIERS----

  if (type === "caS") {
    return (
      <button className="cas">
        <div className="casTop"></div>
        <div className="casBottom">
          <h1>Soldiers</h1>
        </div>
      </button>
    );
  }
};

export default Cas;
