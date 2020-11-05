import { Grid, Typography } from "@material-ui/core";

export default function Screen(props) {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="flex-end"
      justify="center"
      id="screen"
    >
      <Grid item style={{ height: "50px" }}>
        <Typography variant="subtitle1" style={{ lineHeight: "50px" }}>
          {props.current}
        </Typography>
      </Grid>
      <Grid item style={{ height: "50px" }}>
        <Typography variant="subtitle1" style={{ lineHeight: "50px" }}>
          {props.result}
        </Typography>
      </Grid>
    </Grid>
  );
}
