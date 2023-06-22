import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const FilterBar = () => {
  const { active, handleCheckbox } = useContext(PokemonContext);
  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="filter-by-type">
        <span>Type</span>
        <div className="group-type">
          <input
            type="checkbox"
            name="grass"
            id="grass"
            onChange={handleCheckbox}
          />
          <label htmlFor="grass">Grass</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="fire"
            id="fire"
            onChange={handleCheckbox}
          />
          <label htmlFor="fire">Fire</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="bug"
            id="bug"
            onChange={handleCheckbox}
          />
          <label htmlFor="bug">Bug</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="normal"
            id="normal"
            onChange={handleCheckbox}
          />
          <label htmlFor="normal">Normal</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="fighting"
            id="fighting"
            onChange={handleCheckbox}
          />
          <label htmlFor="fighting">Fighting</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="flying"
            id="flying"
            onChange={handleCheckbox}
          />
          <label htmlFor="flying">Flying</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="poison"
            id="poison"
            onChange={handleCheckbox}
          />
          <label htmlFor="poison">Poison</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="ground"
            id="ground"
            onChange={handleCheckbox}
          />
          <label htmlFor="ground">Ground</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="rock"
            id="rock"
            onChange={handleCheckbox}
          />
          <label htmlFor="rock">Rock</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="ghost"
            id="ghost"
            onChange={handleCheckbox}
          />
          <label htmlFor="ghost">Ghost</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="steel"
            id="steel"
            onChange={handleCheckbox}
          />
          <label htmlFor="steel">Steel</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="water"
            id="water"
            onChange={handleCheckbox}
          />
          <label htmlFor="water">Water</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="electric"
            id="electric"
            onChange={handleCheckbox}
          />
          <label htmlFor="electric">Electric</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="pyschic"
            id="pyschic"
            onChange={handleCheckbox}
          />
          <label htmlFor="pyschic">Psychic</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="ice"
            id="ice"
            onChange={handleCheckbox}
          />
          <label htmlFor="ice">Ice</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="dragon"
            id="dragon"
            onChange={handleCheckbox}
          />
          <label htmlFor="dragon">Dragon</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="dark"
            id="dark"
            onChange={handleCheckbox}
          />
          <label htmlFor="dark">Dark</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="fairy"
            id="fairy"
            onChange={handleCheckbox}
          />
          <label htmlFor="fairy">Fairy</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="unknown"
            id="unknown"
            onChange={handleCheckbox}
          />
          <label htmlFor="unknown">Unknown</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            name="shadow"
            id="shadow"
            onChange={handleCheckbox}
          />
          <label htmlFor="shadow">Shadow</label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
