import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router-dom';

export default function CharacterDetailView() {

  const { id } = useParams()
  const { loading, error, data } = useCharacter(id);

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error loading character details.</div>;

  const { character } = data;

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{character.name}</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Episodes</h3>
          <ul className="space-y-2">
            {character.episode.map((ep, index) => (
              <li key={index} className="text-gray-600">
                <span className="font-semibold text-gray-800">{ep.episode}:</span> {ep.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
