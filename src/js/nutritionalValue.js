let items = ''
function lookForFood() {
    let value = document.getElementById('search').value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '826e75ab23msha8900fd3e2c6840p1d7374jsnf962d52c76d3',
            'X-RapidAPI-Host': 'food-nutrition-information.p.rapidapi.com'
        }
    };

    fetch('https://food-nutrition-information.p.rapidapi.com/foods/search?query=' + value, options)
        .then(response => response.json())
        .then(response => response.foods[0].foodNutrients.forEach(value =>
            items += `
            <div class='item'>
            <div>${value.nutrientName}</div>
                <div>${value.value}</div>
            </div>`
        ))
        .then(() => document.querySelector('.container').innerHTML += items)
        .catch(err => console.error(err));


}

