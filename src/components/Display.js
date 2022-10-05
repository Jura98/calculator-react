import { Fragment } from "react";
import classes from '../CSS/Display.module.css'
const Display = (props) => {
  const input =['2x3']
  const result = ['0']
    return (

    <div className={classes.screen}>
      <span className={classes.result}>{props.result}</span>
      <span className={classes.input}>{props.input}</span>
    </div>
  );
};

export default Display;
