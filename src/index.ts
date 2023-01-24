import { Advisor } from "./characters/Advisor/Advisor";
import { Fighter } from "./characters/Fighter/Fighter";
import { King } from "./characters/King/King";
import { Squire } from "./characters/Squire/Squire";
import Component from "./components/ComponentCard/ComponentCard";

import type {
  AdvisorStructre,
  CharacterDataStructure,
  CharacterStructure,
  FighterStructure,
  KingStructure,
  SquireStructure,
} from "./characters/types/types";
import { Character } from "./characters/Character/Character";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../img/jaime.jpg",
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../img/daenerys.jpg",
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../img/tyrion.jpg",
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../img/bronn.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime: Fighter = new Fighter(jaimeData, "sword", 7);
export const daenerys: Fighter = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion: Advisor = new Advisor(tyrionData, daenerys);
export const bronn: Squire = new Squire(bronnData, 0, jaime);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];

const listGenerator = () => {
  const app = document.querySelector(".app")!;
  const ulListItem: HTMLUListElement = document.createElement("ul");
  ulListItem.className = "characters-list row list-unstyled";
  app.appendChild(ulListItem);

  for (let i = 0; i < 5; i++) {
    const liListItem: HTMLLIElement = document.createElement("li");
    ulListItem.appendChild(liListItem);
    ulListItem.className = "character col";
    const card = new Component(
      liListItem,
      "div",
      "characters-list row list-unstyled",
      characters[i]
    );
  }
};

listGenerator();
