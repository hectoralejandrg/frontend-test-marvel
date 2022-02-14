import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { formatInTimeZone } from "date-fns-tz";
import { useNavigate } from "react-router";
import { number } from "yup";

interface Props {
  id: number;
  name?: string;
  description?: string;
  thumbnail?: string;
  modified?: string;
}

const CharacterCard = ({ id, name, description, thumbnail, modified }: Props) => {
  const navigate = useNavigate()
  return (
    <Grid item>
      <Card sx={{ width: 345, minHeight: 300 }}>
        <CardMedia
          component="img"
          height="194"
          image={thumbnail}
          alt={`Image ${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={()=> navigate(`/${id}/edit`)}>
            <EditIcon color="primary" />
          </IconButton>
          <Typography justifySelf={"flex-end"} variant="body2" color="text.secondary">
            {formatInTimeZone(modified!, "America/New_York", "dd/MM/yyyy")}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
