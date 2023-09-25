import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';


export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <Box>
        <AppBar position="static"
          style={{
            backgroundColor: "red",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            height: "80px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <>
            <Link to="/" className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
                alt="logo"
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            </Link>
          </>
          <>
            <form onSubmit={onSearchSubmit}>
              <div className="form-group"
                style={{
                  backgroundColor: "white",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon-search"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"

                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="search"
                  name="valueSearch"
                  id=""
                  value={valueSearch}
                  onChange={onInputChange}
                  placeholder="Buscar nombre de pokemon"
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#006d77",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                }}
              >
                Buscar
              </Button>
            </form>
          </>

        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};
