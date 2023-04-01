/* eslint-disable class-methods-use-this */
export default class Collapse {
  constructor() {
    this.elem = this.create();
    this.button = this.elem.querySelector('.collapse__button');
    this.content = this.elem.querySelector('.collapse__content');

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  static get markup() {
    return `
      <button class="collapse__button">Collapse</button>
      <p class="collapse__content content_closed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ad itaque, enim numquam quas fuga dolorem hic dolorum sunt placeat, reprehenderit corporis ducimus? Ut deleniti fuga eum ipsum error numquam!
      </p>
    `;
  }

  init() {
    document.body.append(this.elem);
    this.button.addEventListener('click', this.onButtonClick);
  }

  create() {
    const collapse = document.createElement('section');
    collapse.classList.add('collapse');

    collapse.insertAdjacentHTML('beforeend', Collapse.markup);

    return collapse;
  }

  onButtonClick() {
    this.addAnimation();
  }

  addAnimation() {
    if (this.content.classList.contains('content_opened')) {
      this.content.classList.remove('content_opened');
      this.content.classList.add('content_closed');
    } else {
      this.content.classList.remove('content_closed');
      this.content.classList.add('content_opened');
    }
  }
}
