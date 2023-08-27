window.onload = function() {

    let header = document.querySelector('h1');
    header.style.backgroundColor = 'green';
    header.style.padding = '10px';
    header.style.color = 'white';

   
    let secondParagraph = document.querySelector('#myDiv p:nth-child(2)');
    secondParagraph.style.color = 'red';

  
    let thirdParagraph = document.querySelector('#myDiv p:nth-child(3)');
    thirdParagraph.style.textDecoration = 'underline';


    let fourthParagraph = document.querySelector('#myDiv p:nth-child(4)');
    fourthParagraph.style.fontStyle = 'italic';

   
    let listItems = document.querySelectorAll('#myList li');
    let listText = '';
    for (let i = 0; i < listItems.length; i++) {
      listText += listItems[i].textContent + ' ';
    }
    let ul = document.querySelector('#myList');
    ul.innerHTML = '<li>' + listText + '</li>';
  };