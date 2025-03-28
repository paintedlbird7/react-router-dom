// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from 'react-router';

const PokemonDetails = (props) => {
    // Always verify that any props are being passed correctly!
    console.log(props); 

const { pokemonId } = useParams();
console.log('pokemonId:', pokemonId);

    return (
      <>
        <h2>Pokemon Details</h2>
        <dl>
          <dt>Weight:</dt>
          <dd></dd>
          <dt>Height:</dt>
          <dd></dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;
  