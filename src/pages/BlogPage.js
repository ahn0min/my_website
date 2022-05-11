import PostRowWrap from '../components/PostRowWrap.js';

export default class BlogPage {
  $target;
  $element;
  $state;

  constructor($target) {
    this.$target = $target;
    this.$element = document.createElement('div');
    this.$element.className = 'blog_main_container';
    this.setup();
    this.render();
  }

  setup() {
    this.$state = {
      imageUrl: '/',
      title: '첫 번째 게시글',
      date: new Date(),
    };
  }
  template() {}

  render() {
    new PostRowWrap(this.$element, this.$state);
    this.$target.appendChild(this.$element);
  }
}
