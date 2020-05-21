
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  var n = 0
  var id = setInterval(() => {
    n += 1
    // domCode.innerHTML = restul.substring(0, n)
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 10)
}

function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector('#paper > .content')
  var n = 0
  var id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = markdown.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 10)
}


var restul = `/*
 * 给你加点样式把
 * 来点红色吧
 */
  *{
    transition:all 1s;
  }
  html{
    background:rgb(222,222,222);
    font-size:16px
  }
  #code {
    border:1px solid red;
    padding:16px
  }
  /*
 * 我需要一点代码高亮了
 */
  .token.selector{
    color:#690
  }
  .token.property{
    color:#905
  }
  .token.function {
    color:#DD4A68
  }
  /*
  * 我需要一点3D效果
  */
  #code {
    transform:rotate(360deg)
  }
  /*
  * 我来介绍一下我自己
  * 我需要一张白纸
  */


`

var restul2 = `
  #code {
    position:fixed;
    left:0;
    width:50%;
    height:100%
  }
  #paper {
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:#ddd;
    padding:16px;
    display:flex;
    justify-content:center
  }
  #paper > .content{
    background:white;
    width:100%;
    height:100%
  }
  /*
   * 接下来 Markdown 变成HTML 
   * 这就是我的会动的简历 
   */
`

var md = `
  # 自我介绍
  我叫 senlin
  1996 年 11月出生
  深职毕业
  从业前端两年

  # 技能介绍
  1.轮播
  2.画板
  3.键盘导航

  # 联系方式
  wechat  xxxxxxxx
  email   xxxxxxxxx
`

writeCode('', restul, (code) => {
  console.log('完成')
  createPaper(() => {
    writeCode(restul, restul2, () => {
      console.log('完成第二个')
      writeMarkdown(md, () => { console.log('完成第三个') })
    })
  })
})

function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}

