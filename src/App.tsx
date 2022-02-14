import { Grid } from "@mui/material";
import React from "react";
import Header from "./features/screen/Header";
import ScreenCharacter from "./features/screen/ScreenCharacter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditScreen from "./features/screen/EditScreen";

const App = () => {
  return (
    <Grid container sx={{ bgcolor: "#F2F5F9" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenCharacter />} />
          <Route path="/:idCharacter/edit" element={<EditScreen />}/>
        </Routes>
      </BrowserRouter>
    </Grid>
  );
};

export default App;
