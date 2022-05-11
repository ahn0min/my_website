export default class CardPost {
  $target;
  $element;
  $state;

  constructor($target, $state) {
    this.$target = $target;
    this.$state = $state;
    this.$element = document.createElement('article');
    this.$element.className = 'card_post';
    this.setup();
    this.render();
  }

  setup() {}

  template() {
    const state = this.$state;
    console.log(state);
    return `
      <div class="card_post_image">
        <a href="/">
          <img src="http://ojsfile.ohmynews.com/STD_IMG_FILE/2021/0421/IE002794302_STD.jpg">
        </a>
      </div>
        <a href="/">
          <h3>${state.title}</h3>
        </a>
      <div>
        <p>본문 몇줄이 들어가 있습니다.</p>
      </div>
      <p>${state.date} , 몇개의 댓글, 작성자</p>

    `;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.$target.appendChild(this.$element);
  }
}
