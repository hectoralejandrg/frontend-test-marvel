import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "../../store/useRedux";
import { useGetCharactersQuery } from "../slice/marvelApiSlice";
import { setCharacters, setOffset } from "../slice/marvelSlice";
import CharacterCard from "./CharacterCard";
import ListSkeleton from "./ListSkeleton";
import update from "immutability-helper";

const ListInfiniteScroll = () => {
  const { limit, offset, characters, characterToEdit } = useAppSelector(
    (state) => state.marvel
  );
  const dispatch = useAppDispatch();

  const { data } = useGetCharactersQuery(
    {
      params: { limit, offset },
    },
    { skip: !characters }
  );

  const handleScroll = () => {
    dispatch(setOffset(offset + limit));
  };

  useEffect(() => {
    if (data) dispatch(setCharacters(characters!.concat(data?.data?.results)));
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
      dispatch(setCharacters(updateCharacter));
    }
  }, [characterToEdit, characters]);

  const listCharacter = characters?.map((c) => (
    <CharacterCard
      key={c.id}
      id={c.id}
      name={c?.name}
      description={c?.description}
      thumbnail={`${c?.thumbnail?.path}.${c?.thumbnail?.extension}`}
      modified={c?.modified}
    />
  ));

  return (
    <InfiniteScroll
      hasMore={true}
      dataLength={characters?.length || 0}
      next={handleScroll}
      loader={
        <Grid item sx={{ mt: 3 }}>
          <ListSkeleton size={limit} />
        </Grid>
      }
    >
      <Grid component={Box} container spacing={3} justifyContent="center">
        {listCharacter}
      </Grid>
    </InfiniteScroll>
  );
};

export default ListInfiniteScroll;
