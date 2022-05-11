import PostRowWrap from "../components/PostRowWrap.js";

export default class BlogPage {
  $target;
  $element;
  constructor($target) {
    this.$target = $target
    this.$element = document.createElement('div');
    this.$element.className = "blog_main_container"
    this.setup()
    this.render()
  }

  setup() {

  }
  template() {
  }

  render() {
    new PostRowWrap(this.$element)
    this.$target.appendChild(this.$element)
  }
}