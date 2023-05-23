import { Grid, Paper, Typography } from "@mui/material";
import MyList from "./List";

export default function FullRecipe(props) {
  return (
    <Paper elevation={6} variant="elevation">
      <Grid container spacing={1}>
        <Grid item xs={8} rowGap={5} rowSpacing={5}>
          <Grid item xs={8}>
            <Typography variant="h5">{props.title}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" textAlign={"left"}>
              {props.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <img
            src={`data:image/png;base64,${props.image}`}
            alt={props.title}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12}>
          <MyList list={props.instructions} />
        </Grid>
      </Grid>
    </Paper>
  );
}
