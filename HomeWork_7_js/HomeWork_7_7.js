/*
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dynamic Dropdowns</title>
</head>
<body>
<select name="country" id="country">
    <option value="ger">Germany</option>
    <option value="usa">USA</option>
    <option value="ukr">Ukraine</option>
</select>

<select name="cities" id="cities"></select>
<p id="selectedInfo"></p>

<script>
const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const selectedInfo = document.getElementById('selectedInfo');

const countryCitiesMap = {
    ger: ['Berlin', 'Munich', 'Hamburg'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Lviv', 'Kharkiv'],
};

countrySelect.addEventListener('change', function() {
    const selectedCountry = countrySelect.value;
    const cities = countryCitiesMap[selectedCountry];
    
    citiesSelect.innerHTML = '';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
    });

    selectedInfo.textContent = `Обрана країна: ${countrySelect.options[countrySelect.selectedIndex].text}, Обране місто: ${citiesSelect.options[citiesSelect.selectedIndex].text}`;
});
</script>
</body>
</html>
*/
