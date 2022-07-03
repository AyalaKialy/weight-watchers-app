let usersArray = [];

window.addEventListener('load', () => {
    document.getElementById('date').valueAsDate = new Date();
    usersArray = JSON.parse(sessionStorage.getItem('usersArray'));
    addUsersToTable(usersArray);
});
function addUsersToTable(users) {
    let table = '';
    users.forEach(user => {
        let currentMeeting = user.weight.meetings[user.weight.meetings.length - 1];
        table += `
    <tr class='item'>
        <th>${user.firstName + ' ' + user.lastName}</th>
        <th><input type='number' id='${'weight' + user.id}' value='${currentMeeting.weight}'></th>  
        <th><input <input type='text' id='${'comments' + user.id}'></th>
    </tr>`
    })
    const container = document.querySelector('.usersTable');
    container.innerHTML += table;
}
function saveMeeting() {
    usersArray.forEach(user => {
        let date = document.getElementById('date').value;
        let weight = document.getElementById('weight' + user.id).value;
        let comments = document.getElementById('comments' + user.id).value;
        let newMeeting = { 'date': date, 'weight': weight, 'comments': comments };
        user.weight.meetings.push(newMeeting);
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: `PATCH`,
            body: JSON.stringify({
                'weight': user.weight,
            }),
            headers: { 'Content-type': `application/json; charset=UTF-8` },
        }).then((response) => {
            if (response.status !== 200 || response.status === undefined) {
                alert(response.message)
            }
        })
    })
}