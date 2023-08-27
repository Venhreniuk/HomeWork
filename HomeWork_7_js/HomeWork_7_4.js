/*<!DOCTYPE html>
<html>
<head>
  <title>Choose and Delete</title>
</head>
<body>
  <select id="dropdown">
    <option value="1">Peater</option>
    <option value="2">Jhon 2</option>
    <option value="3">Alice 3</option>
    <!-- Додайте інші елементи за потреби -->
  </select>
  
  <button id="deleteButton">Choose and Delete</button>

  <script>
    const dropdown = document.getElementById("dropdown");
    const deleteButton = document.getElementById("deleteButton");

    deleteButton.addEventListener("click", () => {
      const selectedOption = dropdown.options[dropdown.selectedIndex];
      if (selectedOption) {
        dropdown.removeChild(selectedOption);
      }
    });
  </script>
</body>
</html>
*/
