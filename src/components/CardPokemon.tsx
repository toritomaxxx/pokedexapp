import { Link } from "react-router-dom";


export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <div className="card-img">
        {/* quiero mostrar DoSpinner cuando la imagen no se encuentre disponible */}

        {
          pokemon.sprites.other.dream_world.front_default === null ? (
            <img
              src={pokemon.sprites.front_default}
              alt={`Pokemon ${pokemon.name}`}
              style={{
                width: "200px",
                height: "200px",
              }}
            />
          ) : (

            
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`Pokemon ${pokemon.name}`}
              style={{
                width: "200px",
                height: "200px",
              }}
            />
          )

        }
      </div>
      <div className="card-info">
        <span className="pokemon-id">N° {pokemon.id}</span>
        <h3
          style={{
            textTransform: "capitalize",
          }}
        >{pokemon.name}</h3>
        <div className="card-types">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
