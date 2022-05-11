export default class Header {
  $element;
  $target;

  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() {}
  template() {
    return `
    <header>
      <div class="header_logo">Ahn0min</div>
      <div class="header_right">
        <ul>
          <a href="/"><li>1</li></a>
           <a href="/"><li>1</li></a>
           <a href="/"><li>1</li></a>
           <a href="/"><li>1</li></a>
        </ul>
      </div>
    </header>
    `;
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
