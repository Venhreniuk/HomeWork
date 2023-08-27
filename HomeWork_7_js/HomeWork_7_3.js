/*<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Button and Link </title>
<style>
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    transition: background-color 0.3s;
  }
</style>
</head>
<body>
  <button id="button1">Button 1</button>
  <button id="button2">Button 2</button>
  <button id="button3">Button 3</button>
  <a href="#" id="link">Link</a>

<script>
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const link = document.getElementById('link');
  const body = document.body;

  button1.addEventListener('click', () => {
    body.style.backgroundColor = 'blue';
  });

  button2.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'pink';
  });

  button3.addEventListener('mousedown', () => {
    body.style.backgroundColor = 'brown';
  });

  button3.addEventListener('mouseup', () => {
    body.style.backgroundColor = 'white';
  });

  link.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'yellow';
  });

  link.addEventListener('mouseout', () => {
    body.style.backgroundColor = 'white';
  });
</script>
</body>
</html>*/
