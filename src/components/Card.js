import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MyBackdrop from "./Backdrop";
// https://stackoverflow.com/questions/25869017/how-to-convert-binary-data-and-mime-to-image-in-javascript
// https://stackoverflow.com/questions/75065222/how-to-turn-binary-from-server-back-into-audio-file
export default function RecipeCard(props) {
    const { title, description, audio, image } = props;
  const [cardClickState, setCardClickState] = React.useState(false);

  const toggleCardClickState = () => setCardClickState(!cardClickState);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={toggleCardClickState}>
          <CardMedia
            component="img"
              height="150"
              width="345"
            src={`data:image/png;base64,${image}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {cardClickState && <MyBackdrop toggle={toggleCardClickState} {...props} />}
    </>
  );
}
