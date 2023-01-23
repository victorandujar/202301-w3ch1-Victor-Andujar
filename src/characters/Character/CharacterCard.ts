type CharacterCardStructure = {
  element: Element;
};

class CharacterCard {
  element: Element;

  constructor(parentElement: Element) {
    this.element = document.createElement("article");
    parentElement.appendChild(this.element);
  }
}

export default CharacterCard;
