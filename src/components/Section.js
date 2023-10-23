export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
// метод для добавления елемента в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

// метод, вызывающий получаемую в конструктор функцию renderer для каждого элемента переданного масива
  renderItems(data) {
    data.forEach(item => {
      this._renderer(item);
    });
  }
}
