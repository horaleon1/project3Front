import React from "react";

export default function Sidebar2() {
  return (
    <div className="sidenav2">
      <div className="sidenav2">
        <a href="/portfolio">Inicio</a>
      </div>
      <div className="sidenav2Balance">
        <ul>
          <li>
            <h3>
              Balance BTC:
              <br />₿
            </h3>
          </li>
          <li>
            <h3>
              Balance USD:
              <br />$
            </h3>
          </li>
          <li>
            <h3>
              Balance MXN:
              <br />$
            </h3>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Criptomoneda</li>
        </ul>
      </div>
    </div>
  );
}
