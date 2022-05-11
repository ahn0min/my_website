import CardPost from "./CardPost.js"

export default class PostRowWrap {
  $element;
  $target
  constructor($target) {
    this.$target = $target
    console.log($target)
    this.$element = document.createElement('div');
    this.$element.className = "blog_post_row_wrap"
    this.setup()
    this.render()
  }

  render() {
    [1, 2, 3, 4, 5].map((ele) => new CardPost(this.$element))
    // this.$element.innerHTML = this.template()
    this.$target.appendChild(this.$element)
  }
  setup() {

  }
  template() {
    return `
      // <article>
      // <a src="/">이미지</a>
      // <div>
      //   <h2></h2>
      //   <p>몇일 전 , 몇개의 댓글, 작성자</p>
      //   <div>
      //     <p>본문 몇줄이 들어가 있습니다.</p>
      //   </div>
      // </div>
      // </article>
      // <article>
      //   <a src="/">이미지</a>
      //   <div>
      //     <h2></h2>
      //     <p>몇일 전 , 몇개의 댓글, 작성자</p>
      //     <div>
      //       <p>본문 몇줄이 들어가 있습니다.</p>
      //     </div>
      //   </div>
      // </article>
      // <article>
      //   <a src="/">이미지</a>
      //   <div>
      //     <h2></h2>
      //     <p>몇일 전 , 몇개의 댓글, 작성자</p>
      //     <div>
      //       <p>본문 몇줄이 들어가 있습니다.</p>
      //     </div>
      //   </div>
      // </article>
    `
  }
}