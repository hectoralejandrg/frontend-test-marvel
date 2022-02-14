import { Grid, IconButton, Typography } from "@mui/material";
import { IconArrowNarrowLeft } from "@tabler/icons";
import React from "react";
import { useNavigate } from "react-router";
import EditForm from "../components/EditForm";

const EditScreen = () => {
  const navigate = useNavigate();
  return (
    <Grid container sx={{ padding: 4, bgcolor: "#FFFFFF", borderRadius: 2 }}>
      <Grid item xs={12}>
        <Grid
          item
          container
          alignItems="center"
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <IconButton onClick={() => navigate("/")}>
            <IconArrowNarrowLeft size={30} />
          </IconButton>
          <Typography variant="h4">Editar</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8} lg={6} sx={{ mt: 2 }}>
          <EditForm />
      </Grid>
    </Grid>
  );
};

export default EditScreen;
