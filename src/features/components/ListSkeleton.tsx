import { Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useAppSelector } from "../../store/useRedux";

interface Props {
  size?: number | 15;
}

const ListSkeleton = ({ size }: Props) => {
  const { limit } = useAppSelector((state) => state.marvel);
  return (
    <Grid component={Box} container spacing={3} justifyContent="center">
      {[...Array(limit)].map((e, i) => (
        <Grid item key={i.toString()}>
          <Skeleton variant="rectangular" width={345} height={250} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListSkeleton;
