(()=>{"use strict";class t{constructor(){this.elem=this.create(),this.button=this.elem.querySelector(".collapse__button"),this.content=this.elem.querySelector(".collapse__content"),this.onButtonClick=this.onButtonClick.bind(this)}static get markup(){return'\n      <button class="collapse__button">Collapse</button>\n      <p class="collapse__content content_closed">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ad itaque, enim numquam quas fuga dolorem hic dolorum sunt placeat, reprehenderit corporis ducimus? Ut deleniti fuga eum ipsum error numquam!\n      </p>\n    '}init(){document.body.append(this.elem),this.button.addEventListener("click",this.onButtonClick)}create(){const e=document.createElement("section");return e.classList.add("collapse"),e.insertAdjacentHTML("beforeend",t.markup),e}onButtonClick(){this.addAnimation()}addAnimation(){this.content.classList.contains("content_opened")?(this.content.classList.remove("content_opened"),this.content.classList.add("content_closed")):(this.content.classList.remove("content_closed"),this.content.classList.add("content_opened"))}}(new t).init()})();
//# sourceMappingURL=main.js.map