import { Link } from "react-router-dom";
import Card from '@mui/material/Card';


export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <Card
        style={{
          width: "280px",
          height: "400px",
          backgroundImage: "url(../src/assets/desktop-wallpaper-pokemon-pokeball-❤-for-ultra-tv-poke-balls.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}

      >
        <div className="card-img">
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
      </Card>
    </Link>
  );
};
