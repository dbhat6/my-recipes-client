import { useLoaderData } from "react-router-dom";
import "./styles/App.css";
import { ImageList } from "@mui/material";
import React from "react";
import MyImageItem from "./components/ImageItem";

export default function App() {
  const recipes = useLoaderData();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ImageList gap={10} cols={3} sx={{ width: 1000, height: "max-content" }}>
          {recipes.map((recipe, index) => (
            <MyImageItem recipe={recipe} key={index} />
          ))}
        </ImageList>
      </header>
    </div>
  );
}

export const AppLoader = async () => {
  const recipes = await fetch("http://localhost:4000/recipes");
  return recipes.json();
};
