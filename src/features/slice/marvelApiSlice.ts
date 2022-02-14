import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import mainApi from "../../api/mainApi";
import { CharacterResponse } from "../interface/character.interface";
import { Params } from "../interface/params.interface";

export const marvelApi = createApi({
  reducerPath: "marvelApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://gateway.marvel.com/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    /**
     * @GET lista
     */
    getCharacters: builder.query<CharacterResponse, {params?: Params}>({
      queryFn: async ({params}) => {
        try {
          const { data } = await mainApi.get<CharacterResponse>(
            "/v1/public/characters",
            { params }
          );
          return { data };
        } catch (error: any) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetCharactersQuery, useLazyGetCharactersQuery } = marvelApi;
