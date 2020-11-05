import { Button, Grid } from "@material-ui/core";

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

function ButtonRow(props) {
  return (
    <Grid container item alignItems="center" justify="space-between">
      <CalcButton value={props.values[0]} handleClick={props.handleClick} />
      <CalcButton value={props.values[1]} handleClick={props.handleClick} />
      <CalcButton value={props.values[2]} handleClick={props.handleClick} />
      <AltButton value={props.values[3]} handleClick={props.handleClick} />
    </Grid>
  );
}

function CalcButton(props) {
  return (
    <Button
      variant="contained"
      style={{
        height: "75px",
        width: "75px",
        borderRadius: 0,
        color: "black",
        backgroundColor: "white",
      }}
      onClick={() => props.handleClick(props.value)}
    >
      {props.value}
    </Button>
  );
}

function AltButton(props) {
  return (
    <Button
      variant="contained"
      color="secondary"
      style={{
        height: "75px",
        width: "75px",
        borderRadius: 0,
      }}
      onClick={() => props.handleClick(props.value)}
    >
      {props.value}
    </Button>
  );
}

function ClearButton(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        height: "75px",
        width: "300px",
        borderRadius: 0,
      }}
      onClick={() => props.handleClick(props.value)}
    >
      {props.value}
    </Button>
  );
}

export { Buttons, ClearButton };
