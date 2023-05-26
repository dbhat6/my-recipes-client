import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

const InstructionsInput = () => {
  const [steps, setSteps] = useState([]);
  const [instruction, setInstruction] = useState("");

  const handleInstructionChange = (event) => {
    setInstruction(event.target.value);
  };

  const handleEnter = () => {
    if (instruction) {
      setSteps([...steps, instruction]);
      setInstruction("");
    }
  };

  const displayList = () => {
    if (steps.length > 0) {
      return (
        <Paper style={{ maxHeight: 200, overflow: "auto", maxWidth: 600 }}>
          <List>
            {steps.map((step, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${index+1}. ${step}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      );
    } else {
      return;
    }
  };

  return (
    <div>
      <div>
        <TextField
          label="Cooking Instructions"
          value={instruction}
          onChange={handleInstructionChange}
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleEnter}>
          Enter
        </Button>
      </div>
      {displayList()}
    </div>
  );
};

export default InstructionsInput;
