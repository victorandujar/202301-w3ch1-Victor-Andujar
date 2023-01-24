interface CharacterCardStructure {
  element: Element;
}

class CharacterCard implements CharacterCardStructure {
  element: Element;

  constructor(parentElement: Element, className: "string") {
    this.element = document.createElement("article");
    this.element.className = className;
    parentElement.querySelector(".card")?.appendChild(this.element);
  }
}

export default CharacterCard;
