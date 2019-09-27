import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <h2 className="alerts"> {alert.msg} </h2> 
      </div>
    ))
  );
};

export default Alerts;
