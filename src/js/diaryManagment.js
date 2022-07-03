
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
let diary = [];

window.addEventListener('load', () => {
    const container = document.getElementById('table');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/users/' + id);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let table = '';
            user = JSON.parse(xhr.responseText);
            if (user.diary) {
                document.getElementById('table').style.display = 'inline-block';
                diary = user.diary;
                user.diary.forEach(item => {
                    table += `
                <tr class='item'>
                    <th>${item.date}</th>
                    <th>${item.breakfast}</th>
                    <th>${item.lunch}</th>
                    <th>${item.dinner}</th>
                    <th>${item.snackingBetweenMeals}</th>

                </tr>`
                });
                container.innerHTML += table;
            }
        }
    }
    let modal = document.getElementById('myModal');
    document.getElementById('addingSummery').addEventListener('click', () => {
        modal.style.display = 'block';
    })
    document.getElementsByClassName('close')[0].addEventListener('click', () => {
        modal.style.display = 'none';
    })
    document.getElementById('currentDate').valueAsDate = new Date();

});

function saveData() {
    let date = document.getElementById('currentDate').value;
    date = new Date(date);
    date = formatDate(date);

    let breakfast = document.getElementById('breakfast').value.trim().split(/\s+/);
    let lunch = document.getElementById('lunch').value.trim().split(/\s+/);
    let dinner = document.getElementById('dinner').value.trim().split(/\s+/);
    let snackingBetweenMeals = document.getElementById('snackingBetweenMeals').value.trim().split(/\s+/);

    let newDiary = { 'date': date, 'breakfast': breakfast, 'lunch': lunch, 'dinner': dinner, 'snackingBetweenMeals': snackingBetweenMeals };
    diary = [...diary, newDiary];

    fetch(`http://localhost:3000/users/${id}`, {
        method: `PATCH`,
        body: JSON.stringify({
            'diary': diary,
        }),
        headers: { 'Content-type': `application/json; charset=UTF-8` },
    }).then((response) => {
        if (response.status !== 200 || response.status === undefined) {
            alert(response.message)
        }
    })
    modal.style.display = 'none';
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}
