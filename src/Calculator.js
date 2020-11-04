import Grid from "@material-ui/core/Grid";
import "./App.css";
import { Paper } from "@material-ui/core";
import { ClearButton, ButtonRow } from "./components/Buttons";
import { useState } from "react";
import Screen from "./components/Screen";
import { evaluate } from "mathjs";

function Buttons(props) {
  return (
    <>
      <ButtonRow
        values={["7", "8", "9", "*"]}
        handleClick={props.handleClick}
      />
      <ButtonRow
        values={["4", "5", "6", "-"]}
        handleClick={props.handleClick}
      />
      <ButtonRow
        values={["1", "2", "3", "+"]}
        handleClick={props.handleClick}
      />
      <ButtonRow
        values={["0", ".", "=", "/"]}
        handleClick={props.handleClick}
      />
    </>
  );
}

export default function Calculator() {
  const [log, setLog] = useState("");
  const [screen, setScreen] = useState("");
  const [lastInput, setlastInput] = useState("Clear");

  // Determines the type of button input from a string
  let checkInput = (input) => {
    let output;

    switch (input) {
      case "+":
      case "-":
      case "*":
      case "/":
        output = "arithExp";
        break;
      case "=":
        output = "evalExp";
        break;
      case "Clear":
        output = "clearExp";
        break;
      default:
        output = "numExp";
        break;
    }

    return output;
  };

  // Syntax Handler for [0-9 | . | +-*/] symbols
  let handleStandardInput = (v) => {
    switch (checkInput(lastInput)) {
      case "arithExp":
      case "clearExp":
        // Allow only numeric expressions
        if (checkInput(v) === "numExp") {
          setScreen(screen + v);
          setlastInput(v);
        }
        break;
      case "numExp":
        // Allow any expression
        setScreen(screen + v);
        setlastInput(v);
        break;
      case "evalExp":
        switch (checkInput(v)) {
          // If numeric expression, continue as normal
          case "numExp":
            setScreen(screen + v);
            setLog("");
            setlastInput(v);
            break;
          // If arith expression, use previous result
          case "arithExp":
            setScreen(log + v);
            setLog("");
            setlastInput(v);
            break;
          default:
            break;
        }
        break;
      default:
        alert("Cases for button input violated");
        break;
    }
  };

  // Main function that handles a press of a button on a calculator
  let handleClick = (v) => {
    if (v === "=") {
      try {
        setLog(evaluate(screen));
        setlastInput(v);
        setScreen("");
      } catch (e) {
        console.log(e);
      }
    } else if (v === "Clear") {
      setlastInput(v);
      setLog("");
      setScreen("");
    } else {
      handleStandardInput(v);
    }
  };

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item>
        <Paper
          elevation={4}
          style={{
            marginBottom: "10%",
            marginTop: "30%",
          }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="stretch"
          >
            <Grid
              container
              item
              direction="column"
              alignItems="center"
              justify="space-between"
              style={{ backgroundColor: "grey" }}
            >
              <Screen console={screen} log={log} />
              <Buttons handleClick={handleClick} />
            </Grid>
            <Grid container item alignItems="stretch" justify="space-between">
              <ClearButton value="Clear" handleClick={handleClick} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
