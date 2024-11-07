import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link to={`/${character.id}`}>
    <div
      key={character.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {character.name}
        </h2>
      </div>
    </div>
    </Link>
  );
}
