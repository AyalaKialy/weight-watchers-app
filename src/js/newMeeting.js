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
        <th><input value="${user.weight.meetings[user.weight.meetings.length - 1].weight}" type="number"></th>  
        <th><input></th>
    </tr>`
    })
    const container = document.querySelector('.usersTable');
    container.innerHTML += table;
}
function saveMeeting() {
    usersArray.forEach(user => {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: `PATCH`,
            body: JSON.stringify({
                "firstName": "ayala",
            }),
            headers: { 'Content-type': `application/json; charset=UTF-8` },
        }).then((response) => response.json())
    })
}