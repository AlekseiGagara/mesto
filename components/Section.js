export default class Section {
  constructor({ data: items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
// метод для добавления елемента в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

// метод вызывающий получаемую в конструктор функцию renderer для каждого элемента получаемого в конструктор массива
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
