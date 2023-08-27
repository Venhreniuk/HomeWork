// ЗАВДАННЯ №1

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <style>
    .green-bg {
            background-color: green;
        }
    </style>

</head>
<body>
  <h2 class="head">header1</h2>
    <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
    <h2>header3</h2>
    <h2 class="head">header4<span>inner elem2</span></h2>
    <h2>header5</h2>

    <script>
        $(document).ready(function () {
            $("h2.head").addClass("green-bg");
            $("h2.head .inner").css("font-size", "35px");
        });
    </script>

</body>
</html>
*/

//ЗАВДАННЯ #2



/*
function() {
  let links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      let href = links[i].getAttribute("href");
      if (href && href.startsWith("https://")) {
        links[i].setAttribute("target", "_blank");
      }
    }
  };
  */



  //ЗАВДАННЯ #3

  /*
const headers = document.querySelectorAll('h3');
const divs = document.querySelectorAll('div');

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];
  const div = divs[i];

  header.parentNode.insertBefore(div, header);
}
*/



//ЗАВДАННЯ #4
/*

const checkboxes = document.querySelectorAll('.my-checkbox');

let checkedCount = 0;

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      checkedCount++;
      if (checkedCount >= 3) {
        checkboxes.forEach(cb => {
          cb.disabled = true;
        });
      }
    } else {
      checkedCount--;
      checkboxes.forEach(cb => {
        cb.disabled = false;
      });
    }
  });
});
*/