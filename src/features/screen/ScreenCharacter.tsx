import { Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/useRedux";
import ListInfiniteScroll from "../components/ListInfiniteScroll";
import SearchList from "../components/SearchList";
import Header from "./Header";

const ScreenCharacter = () => {
  const { search } = useAppSelector((state) => state.marvel);

  return (
    <>
      <Header />
      <Grid container mt={10}>
        {search ? <SearchList /> : <ListInfiniteScroll />}
      </Grid>
    </>
  );
};

export default ScreenCharacter;
