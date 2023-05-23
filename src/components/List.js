import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export default function MyList(props) {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }} dense>
      {props.list.map((val, index) => {
        const labelId = `checkbox-list-label-${index}`;
        return (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={handleToggle(val.value)} >
              {props.checkbox && (
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(val.value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
              )}
              <ListItemText
                id={labelId}
                primary={val.value}
                secondary={props.secondary ? val.quantity : null}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
