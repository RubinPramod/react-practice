import React from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [search, setSearch] = React.useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATION, {
    variables: { name: search },
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800">Character Location Search</h1>
      
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter character name"
        />
        <button
          onClick={() => getLocations({ variables: { name: search } })}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error occurred. Try again.</p>}

      {data && (
        <ul className="space-y-2">
          {data.characters.results.map((character) => (
            <li key={character.location.name} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <p className="text-lg font-medium text-gray-800">Location: {character.location.name}</p>
            </li>
          ))}
        </ul>
      )}

      {!data && !loading && called && (
        <p className="text-center text-gray-600">No locations found for "{search}".</p>
      )}
    </div>
  );
}
