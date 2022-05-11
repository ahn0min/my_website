import CardPost from './CardPost.js';

export default class PostRowWrap {
  $element;
  $target;
  $state;

  constructor($target, $state) {
    this.$target = $target;
    this.$element = document.createElement('div');
    this.$element.className = 'blog_post_row_wrap';
    this.setup($state);
    this.render();
  }

  render() {
    [1, 2, 3, 4, 5].map((ele) => new CardPost(this.$element, this.$state));
    this.$target.appendChild(this.$element);
  }
  setup($state) {
    this.$state = $state;
    console.log(this.$state);
  }
  template() {
    return `
    `;
  }
}
