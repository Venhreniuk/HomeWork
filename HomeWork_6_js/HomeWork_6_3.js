
 let mainElement = document.createElement('main');
 mainElement.setAttribute('class', 'mainClass check item');
 mainElement.id = 'myMain';
 
 let divElement = document.createElement('div');
 divElement.id = 'myDiv';
 
 let pElement = document.createElement('p');
 pElement.textContent = 'First paragraph';
 
 divElement.appendChild(pElement);
 
 mainElement.appendChild(divElement);
 
 document.body.appendChild(mainElement);