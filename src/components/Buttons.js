import { Button } from "@material-ui/core";

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
    >
      {props.value}
    </Button>
  );
}

export { CalcButton, ClearButton, AltButton };
