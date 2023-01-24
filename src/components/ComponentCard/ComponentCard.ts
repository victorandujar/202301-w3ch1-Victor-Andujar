export interface ComponentStructure {
  element: Element;
}

class Component implements ComponentStructure {
  element: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);

    this.render();
  }

  render() {
    this.element.innerHTML = `
        <div class="card character__card">
          <img src="img/no-one.jpg" alt="Character's Name and family" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">Name & family</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: X yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Years of Reign: X</li>
                <li>Weapon: XXX</li>
                <li>Dexterity: X</li>
                <li>Kiss Ass level: X</li>
                <li>Advises to: X</li>
                <li>Serves to: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
  </div>
  <div class="communications">
    <p class="communications__text display-1">A sentence someone says</p>
    <img class="communications__picture" src="img/no-one.jpg" alt="Name and family of who speaks" />`;
  }
}

export default Component;
