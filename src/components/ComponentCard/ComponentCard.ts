interface ComponentCardStructure {
  element: Element;
}

class ComponentCard implements ComponentCardStructure {
  element: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}

export default ComponentCard;
