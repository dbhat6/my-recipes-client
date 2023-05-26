import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

const IngredientInput = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleEnter = () => {
    if (name && quantity && unit) {
      const newIngredient = `${name}: ${quantity} ${unit}`;
      setIngredients([...ingredients, newIngredient]);
      setName("");
      setQuantity("");
      setUnit("");
    }
  };

  const displayList = () => {
    if (ingredients.length > 0) {
      return (
        <Paper style={{ maxHeight: 200, overflow: "auto", maxWidth: 600 }}>
          <List>
            {ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${index+1} ${ingredient}`} />
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
          label="Ingredient Name"
          value={name}
          onChange={handleNameChange}
          variant="outlined"
        />
        <TextField
          label="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
          variant="outlined"
        />
        <Select
          value={unit}
          onChange={handleUnitChange}
          variant="outlined"
          style={{ marginLeft: 10, width: 120 }}
        >
          <MenuItem value="cup">Cup(s)</MenuItem>
          <MenuItem value="tsp">Teaspoon(s)</MenuItem>
          <MenuItem value="tbsp">Tablespoon(s)</MenuItem>
          <MenuItem value="oz">Ounce(s)</MenuItem>
          <MenuItem value="lb">Pound(s)</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={handleEnter}>
          Enter
        </Button>
      </div>

      {displayList()}
    </div>
  );
};

export default IngredientInput;
