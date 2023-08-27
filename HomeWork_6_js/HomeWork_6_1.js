
  window.onload = function() {
    var listItems = document.querySelectorAll('#list li');

    var modalContent = '';
    modalContent += listItems[0].textContent + ',<br>';
    modalContent += listItems[listItems.length - 1].textContent + ',<br>';
    modalContent += listItems[1].textContent + ',<br>';
    modalContent += listItems[3].textContent + ',<br>';
    modalContent += listItems[2].textContent + ',<br>';

    var modal = document.querySelector('#modal');
    modal.innerHTML = modalContent;
  };