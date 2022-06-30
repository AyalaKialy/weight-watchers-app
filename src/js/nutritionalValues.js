let foodNames = [];
const url = new URL (`https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2` )

const options = {
  method: 'GET',
  headers: {}
};

window.addEventListener('load', () => {
  fetch(url, options)
  .then(response => response.json())
  .then(response => {
    const foods = response.result.records;
    foods.forEach(food => {
    foodNames = [...foodNames,food.shmmitzrach]
    });
  });
});

function showResults(value) {
  let result = document.getElementById('result');
  result.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(value);
  for (i=0; i<terms.length; i++) {
    list += `<li onclick='selectedItem('${terms[i]}')'> ${terms[i]} </li>`;
  }
  result.innerHTML = `<ul> ${list} </ul>`;
}

function selectedItem(item) {
  let result = document.getElementById('result');
  const foodToSearch = document.getElementById('nutritionalValues');
  foodToSearch.value = item;
  getNutritionalValues(foodToSearch.value)
  result.innerHTML = '';
}

function autocompleteMatch(input) {
  if (input === '') {
    return [];
  }
  let reg = new RegExp(input)
  return foodNames.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function getNutritionalValues(selectedFood){
    fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${selectedFood}&limit=4630`, options)
  	.then(response => response.json())
    .then(response => {
      const foods = response.result.records;
      if (foods.length === 0){
        alert('food not found');
      }
      else{
      showNutritionalValues(foods)
      } 
    })
	.catch(err => console.error(err));
}


function showNutritionalValues(food){
  document.getElementById('table').style.display = 'block';
  let table = '';
  for(let i=0; i<food.length;i++){
      table += `
      <tr class='item'>
          <td>${food[i].Code}</td>
          <td>${food[i].shmmitzrach}</td>
          <td>${food[i].food_energy }</td>
          <td>${food[i].calcium }</td>
          <td>${food[i].carbohydrates }</td>
          <td>${food[i].cholesterol }</td>
          <td>${food[i].folate }</td>
          <td>${food[i].iron }</td>
          <td>${food[i].alcohol }</td>
          <td>${food[i].magnesium }</td>
          <td>${food[i].poly_unsaturated_fat }</td>
          <td>${food[i].potassium }</td>
          <td>${food[i].protein }</td>
          <td>${food[i].saturated_fat }</td>
          <td>${food[i].sodium }</td>
          <td>${food[i].total_dietary_fiber }</td>
          <td>${food[i].total_sugars }</td>
          <td>${food[i].vitamin_c }</td>
          <td>${food[i].vitamin_d }</td>
          <td>${food[i].zinc }</td>
      </tr>`
    }
  const container = document.querySelector('.nutritionalValuesTable');
  container.innerHTML += table;
}


