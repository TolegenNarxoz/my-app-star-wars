import React, { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import swFilms from "../../data/films.json";
import swGames from "../../data/games.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";

import { ReactComponent as PlanetSVG } from "../../assets/planet.svg";
import { Select } from "../sw-select";

export const Content = () => {
  const [tab, setTab] = useState("Characters");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };

  const planetRotationItem = (
    <>
      <PlanetSVG width={50} height={50} />
      <p>planets</p>
    </>
  );

  return (
    <div className="content-layout">
      <Select tab={tab} handleChangeTab={handleChangeTab} />

      {tab === "Characters" &&
        swCharacters.map((character) => (
          <CharacterLayout key={character.name} item={character}>
            <CharacterList label="Name" item={character.name} />
            <CharacterList label="Gender" item={character.gender} />
            <CharacterList label="Birth year" item={character.birth_year} />
          </CharacterLayout>
        ))}

      {tab === "Planets" &&
        swPlanets.map((planet) => (
          <CharacterLayout key={planet.name} item={planet}>
            <CharacterList label="name" item={planet.name} />
            <CharacterList
              label={planetRotationItem}
              item={planet.rotation_period}
            />
            <CharacterList label="Terrain" item={planet.terrain} />
          </CharacterLayout>
        ))}
        {tab === "Starships" &&
            swStarships.map((starships) => (
                <CharacterLayout key={starships.name} item={starships}>
                    <CharacterList label="Name: " item={starships.name} />
                    <CharacterList label="Model: " item={starships.model} />
                    <CharacterList label="Manufacturer: " item={starships.manufacturer} />
                </CharacterLayout>
            ))}
        {tab === "Films" &&
            swFilms.map((films) => (
                <CharacterLayout key={films.name} item={films}>
                    <CharacterList label="Name: " item={films.name} />
                    <CharacterList label="Context: " item={films.context} />
                    <CharacterList label="Year: " item={films.year} />
                </CharacterLayout>
            ))}
        {tab === "Games" &&
            swGames.map((games) => (
                <CharacterLayout key={games.name} item={games}>
                    <CharacterList label="Game name: " item={games.name} />
                    <CharacterList label="Context: " item={games.context} />
                    <CharacterList label="Year: " item={games.game_year} />
                </CharacterLayout>
            ))}
    </div>
  );
};
