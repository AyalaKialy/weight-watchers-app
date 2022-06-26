let usersArray = [];

window.addEventListener('load', () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://localhost:3000/users');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        }
        else {
            let users = JSON.parse(xhr.responseText);
            usersArray = users;
            sessionStorage.setItem('usersArray', JSON.stringify(users));
            addUsersToTable(users);
        }
    }

});

function addUsersToTable(users) {
    let table = '';
    users.forEach(user => {
        let bmi = user.weight.meetings[user.weight.meetings.length - 1].weight / Math.pow(user.hight, 2);
        let c = "green";
        if (user.weight.meetings[user.weight.meetings.length - 1].weight > user.weight.meetings[user.weight.meetings.length - 2].weight) {
            c = "red";
        }
        table += `
    <tr class="item">
        <th>${user.firstName + ' ' + user.lastName}</th>
        <th style="color:${c}">${Math.floor(bmi * 100) / 100}</th>
        <th><a href="../html/userDetails.html?id=${user.id}">details user</a></th>
    </tr>`
    })
    const container = document.querySelector('.usersTable');
    container.innerHTML += table;
}
function freeSearch(value) {
    if (value && value.trim().length > 0) {
        let subArray = usersArray.filter(u => u.firstName.includes(value) || u.lastName.includes(value) || u.email.includes(value) || u.phone.includes(value));
        document.querySelectorAll(".item").forEach(item => { item.remove() });
        addUsersToTable(subArray);
    }
    else if (value.length === 0) {
        document.querySelectorAll(".item").forEach(item => { item.remove() });
        addUsersToTable(usersArray);
    }
}
function biggerWeightThan(value) {
    if (value && value.trim().length > 0) {
        let subArray = usersArray.filter(u => u.weight.meetings[u.weight.meetings.length - 1].weight >= value);
        document.querySelectorAll(".item").forEach(item => { item.remove() });
        addUsersToTable(subArray);
    }
    else if (value.length === 0) {
        document.querySelectorAll(".item").forEach(item => { item.remove() });
        addUsersToTable(usersArray);
    }
}
function lowerWeightThan(value) {
    if (value && value.trim().length > 0) {
        let subArray = usersArray.filter(u => u.weight.meetings[u.weight.meetings.length - 1].weight <= value);
        document.querySelectorAll(".item").forEach(item => { item.remove() });
        addUsersToTable(subArray);
    }
    else if (value.length === 0) {
        document.querySelectorAll(".item").forEach(item => { item.remove() });
        addUsersToTable(usersArray);
    }
}
function addNewMeeting() {
    window.location.href = "../html/newMeeting.html";
}



