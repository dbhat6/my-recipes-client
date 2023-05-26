import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import IngredientInput from "../components/IngredientsInput";
import InstructionsInput from "../components/InstructionsInput";
import SendIcon from "@mui/icons-material/Send";
import { MuiFileInput } from "mui-file-input";

export default function NewRecipe() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    serving: 0,
    prepTime: 0,
    cookTime: 0,
    image: "",
  });
  const handleFileChange = (value) => {
    setFormState({...formState, image: value})
    console.log(formState.image.name);
    console.log(formState.image.type);
  }
  const handleDummyChange = (value) => {
    console.log(value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[6].value);
    console.log(event.target[10].value);
    console.log(event.target);
    console.log(event);
    // event.target.map((val)=>{
    //     console.log(val);
    // })
  };
  return (
    <>
      <h1>Check</h1>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={onSubmit}>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            spacing={2}
            style={{ width: 600, top: "50%", left: "50%" }}
          >
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  required
                  label="Title"
                  variant="outlined"
                />
                <FormHelperText>Title of the recipe</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                />
                <FormHelperText>Description of the recipe</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <TextField
                  required
                  id="outlined-number"
                  label="Serving"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormHelperText>For how many person(s)</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item container spacing={2} xs={6}>
              <Grid item xs={12}>
                <FormControl>
                  <Typography variant="subtitle2">Time Taken</Typography>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <TextField
                    id="outlined-number"
                    label="Prep Time"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                  <FormHelperText>In min(s)</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <TextField
                    id="outlined-number"
                    label="Cooking Time"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                  <FormHelperText>In min(s)</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={handleDummyChange}
                />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="raised"
                    component="span"
                  >
                    Upload
                  </Button>
                </label>
                <MuiFileInput
        placeholder="Insert a photo"
        value={formState.image}
        onChange={handleFileChange}
      />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <IngredientInput />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InstructionsInput />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
