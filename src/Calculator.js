import Grid from "@material-ui/core/Grid";
import "./App.css";
import { Paper } from "@material-ui/core";
import { CalcButton, AltButton, ClearButton } from "./components/Buttons";

function ButtonRow(props) {
  return (
    <Grid container item alignItems="center" justify="space-between">
      <CalcButton value={props.values[0]} />
      <CalcButton value={props.values[1]} />
      <CalcButton value={props.values[2]} />
      <AltButton value={props.values[3]} />
    </Grid>
  );
}

export default function Calculator() {
  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item>
        <Paper
          elevation={3}
          style={{
            marginBottom: "10%",
            marginTop: "10%",
            width: "100%",
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
              <h4> Log goes here </h4>
              <h4> Console goes here </h4>
              <ButtonRow values={["7", "8", "9", "*"]} />
              <ButtonRow values={["4", "5", "6", "-"]} />
              <ButtonRow values={["1", "2", "3", "+"]} />
              <ButtonRow values={["0", ".", "=", "/"]} />
            </Grid>
            <Grid container item alignItems="stretch" justify="space-between">
              <ClearButton value="Clear" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
