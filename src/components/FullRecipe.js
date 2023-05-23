import { Fade, Grid, Paper, Typography } from "@mui/material";
import MyList from "./List";

const styles = {
  padding: 1,
};

const ingStyle = {
  bgcolor: "background.paper",
  border: "1px groove #000",
  margin: 0.5,
  padding: 1
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FullRecipe(props) {
  return (
    <Fade in={true}>
      <Paper elevation={6} variant="elevation" sx={style}>
        <Grid container spacing={1}>
          <Grid item xs={8} container>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ ...styles, textAlign: "center" }}>
                {props.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ ...styles, textAlign: "left" }}>
                {props.description}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ ...styles, textAlign: "left" }}>
                Serving: {props.serving}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Time Taken:</Typography>
              <Typography
                variant="body2"
                sx={{ padding: 0.5, textAlign: "left" }}
              >
                Prep Time: {props.timeTaken.prepTime.value}{" "}
                {props.timeTaken.prepTime.unit}
              </Typography>
              <Typography
                variant="body2"
                sx={{ padding: 0.5, textAlign: "left" }}
              >
                Cook Time: {props.timeTaken.cookTime.value}{" "}
                {props.timeTaken.cookTime.unit}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ padding: 1 }}>
              <audio controls src={`data:audio/mp3;base64,${props.audio}`} />
            </Grid>
          </Grid>
          <Grid item xs={4} sx={styles}>
            <img
              src={`data:image/png;base64,${props.image}`}
              alt={props.title}
              loading="lazy"
            />
          </Grid>
          <Grid item xs={12} sx={styles} container spacing={1}>
            {/* <Typography variant="body1">Ingredients:</Typography> */}
            {props.ingredients.map((ingredient, index)=> (
              <Grid item xs={"auto"} key={index} sx={ingStyle}>
                <Typography variant="body1">{ingredient.value}</Typography>
                <Typography variant="subtitle1">{ingredient.quantity}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <MyList list={props.instructions} checkbox={true}/>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
}
