export default class CardPost {
  $target;
  $element;
  constructor($target) {
    this.$target = $target;
    this.$element = document.createElement('article');
    this.setup();
    this.render();
  }

  setup() {}

  template() {
    return `
      <a src="/">이미지</a>
      <div>
        <h2></h2>
        <p>몇일 전 , 몇개의 댓글, 작성자</p>
        <div>
          <p>본문 몇줄이 들어가 있습니다.</p>
        </div>
      </div>
    `;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.$target.appendChild(this.$element);
  }
}
