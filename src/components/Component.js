export default class Component {
  $target;
  $state;
  $element
  constructor($target) {
    this.$target = $target
    this.render();
    this.setup()
  }

  setup() {}


  render() {
    
    this.$element.innerHTML = this.template()
    this.$target.appendChild(this.$element)
  }

  template() {
    return ``
  }
}