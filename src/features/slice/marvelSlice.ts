import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Result } from "../interface/character.interface";

interface MarvelState {
  limit: number;
  offset: number;
  search?: string;
  characters?: Result[];
  characterToEdit?: Result;
}

const initialState = {
  limit: 20,
  offset: 0,
  characters: [],
} as MarvelState;

const marvelSlice = createSlice({
  name: "marvelSlice",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string | undefined>) {
      state.search = action.payload;
    },
    setOffset(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
    setCharacters(state, action: PayloadAction<Result[]>) {
      state.characters = action.payload;
    },
    setCharactersToEdit(state, action: PayloadAction<Result>) {
      state.characterToEdit = action.payload;
    },
  },
});

export const { setSearch, setOffset, setCharacters, setCharactersToEdit } = marvelSlice.actions;
export default marvelSlice.reducer;
