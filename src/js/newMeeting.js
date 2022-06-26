let usersArray = [];

window.addEventListener('load', () => {
    document.getElementById('date').valueAsDate = new Date();
    usersArray = JSON.parse(sessionStorage.getItem("usersArray"));
    addUsersToTable(usersArray);
});
function addUsersToTable(users) {
    let table = '';
    users.forEach(user => {
        table += `
    <tr class="item">
        <th>${user.firstName + ' ' + user.lastName}</th>
        <th><input type="number" id="${user.id}" value="${user.weight.meetings[user.weight.meetings.length - 1].weight}"></th>  
        <th><input></th>
    </tr>`
    })
    const container = document.querySelector('.usersTable');
    container.innerHTML += table;
}
function saveMeeting() {
    usersArray.forEach(user => {
        let newMeeting = { "date": document.getElementById("date").value, "weight": document.getElementById(user.id).value };
        user.weight.meetings.push(newMeeting);
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: `PATCH`,
            body: JSON.stringify({
                "weight": user.weight,
            }),
            headers: { 'Content-type': `application/json; charset=UTF-8` },
        }).then((response) => response.json())
    })
}