import React from "react";
import classes from "./Backdrop.module.css";
const Backdrop = ({ onCancelHandler = () => {}, ...rest }) => {

  return (
    <div
      ref={rest.backDropRef}
      onClick={() => onCancelHandler()}
      className={classes.BackDrop}
    ></div>
  );
};
export default Backdrop;
