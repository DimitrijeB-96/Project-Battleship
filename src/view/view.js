export default class View {
  constructor() {
    this.container = this.createElement('div', 'container');

    this.header = this.createElement('div', 'header');
    this.mainSection = this.createElement('div', 'main-section');

    this.headerTitle = this.createElement('h1', 'main-title');
    this.headerTitle.textContent = 'Battleship';

    this.header.append(this.headerTitle);
    this.displayMenu();
    this.container.append(this.header, this.mainSection);
    document.body.append(this.container);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  displayMenu() {
    const menuWindow = this.createElement('div', 'menu-window');

    const headerMenu = this.createElement('div', 'header-menu');
    const contentMenu = this.createElement('div', 'content-menu');

    const menuTitle = this.createElement('h2', 'menu-title');
    menuTitle.textContent = 'Place your ships';

    const shipsListDiv = this.createElement('div', 'ships-list-div');
    const boardMenuDiv = this.createElement('div', 'board-menu-div');

    const grid = this.createElement('div', 'grid-menu');

    // This value is for total table size 10x10;
    let gridSize = 10 * 10;

    for (let i = 0; i < gridSize; i++) {
      let square = this.createElement('div', 'square');
      grid.append(square);
    }

    this.displayMenuBackground();
    
    headerMenu.append(menuTitle);
    boardMenuDiv.append(grid);
    contentMenu.append(shipsListDiv, boardMenuDiv);
    menuWindow.append(headerMenu, contentMenu);
    document.body.append(menuWindow);
  }

  displayMenuBackground() {
    const background = this.createElement('div', 'black-background');

    document.body.append(background);
  }

  displayGame() {
    const enemyBoard = this.createElement('div', 'enemy-board');
    const playerBoard = this.createElement('div', 'player-board');

    // Append it when startGameBtn is clicked
  }
}