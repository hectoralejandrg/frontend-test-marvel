import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { DebounceInput } from "react-debounce-input";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../../store/useRedux";
import { setCharacters, setSearch } from "../slice/marvelSlice";
import { IconX } from "@tabler/icons";

const SearchInput = () => {
  const { search } = useAppSelector((state) => state.marvel);
  const dispatch = useAppDispatch();

  return (
    <DebounceInput
      autoFocus={Boolean(search)}
      minLength={2}
      debounceTimeout={300}
      onChange={({ target }) => {
        dispatch(setCharacters([]));
        dispatch(setSearch(target.value || undefined));
      }}
      value={search}
      element={(props) => (
        <TextField
          style={{
            width: "100%",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => {
                    dispatch(setSearch(""));
                  }}
                  {...(!search && {
                    sx: { cursor: "initial", opacity: 0 },
                  })}
                >
                  <IconX size={20} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder={"Search character"}
          variant="outlined"
          size="small"
          {...props}
        />
      )}
    />
  );
};

export default SearchInput;
