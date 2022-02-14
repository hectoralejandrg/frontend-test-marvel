import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/useRedux";
import { useGetCharactersQuery } from "../slice/marvelApiSlice";
import CharacterCard from "./CharacterCard";
import ListSkeleton from "./ListSkeleton";
import { setCharacters } from "../slice/marvelSlice";
import update from "immutability-helper";

const SearchList = () => {
  const { search, characters, characterToEdit } = useAppSelector(
    (state) => state.marvel
  );
  const dispatch = useAppDispatch();

  const { data, isFetching, isSuccess } =
    useGetCharactersQuery(
      {
        params: { nameStartsWith: search },
      },
      { skip: !characters }
    );

  useEffect(() => {
    if (data && isSuccess) dispatch(setCharacters(data?.data?.results));
  }, [data]);

  useEffect(() => {
    if (characterToEdit && characters) {
      let index: number = characters.findIndex(
        (e) => e.id === characterToEdit.id
      );
      const updateCharacter = update(characters, {
        [index]: {
          name: { $set: characterToEdit.name },
          description: { $set: characterToEdit.description },
        },
      });
      dispatch(setCharacters(updateCharacter))
    }
  }, [characterToEdit, characters]);

  const listSearch = characters?.map((c) => (
    <CharacterCard
      key={c.id}
      id={c.id}
      name={c?.name}
      description={c?.description}
      thumbnail={`${c?.thumbnail?.path}.${c?.thumbnail?.extension}`}
      modified={c?.modified}
    />
  ));
  return isFetching ? (
    <ListSkeleton size={20} />
  ) : (
    <Grid component={Box} container spacing={3} justifyContent="center">
      {listSearch}
    </Grid>
  );
};

export default SearchList;
