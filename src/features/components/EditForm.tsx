import {
  Alert,
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/useRedux";
import { Result } from "../interface/character.interface";
import { setCharactersToEdit } from "../slice/marvelSlice";
import { EditSchema } from "../validations/EditFormSchema";
import CloseIcon from "@mui/icons-material/Close";
import update from "immutability-helper";

const EditForm = () => {
  const { idCharacter } = useParams<{ idCharacter: string }>();
  const { characters } = useAppSelector((state) => state.marvel);
  const [showAlerts, setShowAlerts] = useState(false);

  const dispatch = useAppDispatch();

  const characterToEdit =
    characters?.find((c) => c.id === Number(idCharacter)) || ({} as Result);

  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      name: characterToEdit?.name || "",
      description: characterToEdit?.description || "",
    },
    validationSchema: EditSchema,
    onSubmit: async (values) => {
      if (characterToEdit) {
        const updateCharacter = update(characterToEdit, {
          name: { $set: values.name },
          description: { $set: values.description },
        });

        dispatch(setCharactersToEdit(updateCharacter));
        setShowAlerts(true);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" gap={2}>
        <Grid item>
          {showAlerts && (
            <Alert
              icon={false}
              severity="success"
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={() => setShowAlerts(false)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            >
              Character update success.
            </Alert>
          )}
        </Grid>
        <Grid item container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <InputLabel>Name</InputLabel>
            <TextField
              fullWidth
              error={Boolean(errors.name && touched.name)}
              placeholder="Character name"
              {...getFieldProps("name")}
            />
            {errors.name && touched.name && (
              <FormHelperText error>{errors.name}</FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Description</InputLabel>
            <TextField
              multiline
              rows={2}
              fullWidth
              error={Boolean(errors.description && touched.description)}
              placeholder="Character description"
              {...getFieldProps("description")}
            />
            {errors.description && touched.description && (
              <FormHelperText error>{errors.description}</FormHelperText>
            )}
          </Grid>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
          sx={{ mt: 1 }}
        >
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              //   endIcon={isUpdating && <CircularProgress size={20} />}
            >
              Actualizar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditForm;
