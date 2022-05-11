import CardPost from './CardPost.js';

export default class PostRowWrap {
  $element;
  $target;

  constructor($target) {
    this.$target = $target;
    console.log($target);
    this.$element = document.createElement('div');
    this.$element.className = 'blog_post_row_wrap';
    this.setup();
    this.render();
  }

  render() {
    [1, 2, 3, 4, 5].map((ele) => new CardPost(this.$element));
    this.$target.appendChild(this.$element);
  }
  setup() {}
  template() {
    return `
    `;
  }
}
