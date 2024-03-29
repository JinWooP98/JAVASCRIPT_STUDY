/*

<html>
<head>
</head>
<body>
  <div class='wrap' title = 'abc'>
    <ul id='list'>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</body>
</html>

*/

let html, head, body, div, ul, li;

html = {
  tagName : `html`,
  children: ['head', 'body']
};
head = {
  tagName : `head`,
  children: null,
  parentNode: html,
  nextSibling : body
};
body = {
  tagName : `body`,
  children: div,
  parentNode: html,
  nextSibling : null,
  prevSibling: head
};
div = {
  tagName : `div`,
  children: [ul],
  parentNode: body,
  nextSibling : null,
  prevSibling: null,
  className : 'wrap clearfix',
  classList : ['wrap', 'clearfix'],
  attributes: {
    'class': 'warp clearfix',
    'title': 'abc'
  }
};

console.log(div.parentNode.parentNode);