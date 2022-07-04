
const url = new URL('http://localhost:3000/users/');
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const newUrl = new URL(id, url);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', newUrl);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            const user = JSON.parse(xhr.responseText);
            showUserDetails(user);
        }
    }
    document.getElementById('toDiary').addEventListener('click', () => {
        window.location.href = `../html/diaryManagment.html?id=${id}`;
    });
    document.getElementById('toNutritionalValues').addEventListener('click', () => {
        window.location.href = `../html/nutritionalValues.html`;
    });
});

function showUserDetails(currentUser) {
    document.getElementById('userName').innerHTML = currentUser.firstName + ' ' + currentUser.lastName;
    document.getElementById('id').value = currentUser.id;
    document.getElementById('firstName').value = currentUser.firstName;
    document.getElementById('lastName').value = currentUser.lastName;
    document.getElementById('city').value = currentUser.address.city;
    document.getElementById('street').value = currentUser.address.street;
    document.getElementById('number').value = currentUser.address.number;
    document.getElementById('phone').value = currentUser.phone;
    document.getElementById('email').value = currentUser.email;
    document.getElementById('comments').value = currentUser.comments;
    document.getElementById('hight').value = currentUser.hight;
    document.getElementById('startWeight').innerHTML = currentUser.weight.startWeight;
    document.getElementById('currentWeight').innerHTML = currentUser.weight.meetings[currentUser.weight.meetings.length - 1].weight;
    document.getElementById('BMI').innerHTML = ((currentUser.weight.meetings[currentUser.weight.meetings.length - 1].weight) / Math.pow(currentUser.hight, 2)).toFixed(2);

    currentUser.weight.meetings.forEach(meeting => {
        const tmp = document.getElementsByTagName('template')[0];
        const element = tmp.content.cloneNode(true);
        element.querySelector('.date').innerText = meeting.date;
        element.querySelector('.weight').innerText = meeting.weight;
        const weightsTable = document.getElementById('weights');
        weightsTable.append(element);
    });
}

function editDetails() {
    document.getElementById('firstName').removeAttribute('readonly');
    document.getElementById('lastName').removeAttribute('readonly');
    document.getElementById('hight').removeAttribute('readonly');
    document.getElementById('city').removeAttribute('readonly');
    document.getElementById('street').removeAttribute('readonly');
    document.getElementById('number').removeAttribute('readonly');
    document.getElementById('phone').removeAttribute('readonly');
    document.getElementById('email').removeAttribute('readonly');
    document.getElementById('comments').removeAttribute('readonly');
}

function saveDetails() {
    const id = document.getElementById('id').value;
    const address = {
        'city': document.getElementById('city').value,
        'street': document.getElementById('street').value,
        'number': document.getElementById('number').value,
    };
    fetch(`http://localhost:3000/users/${id}`, {
        method: `PATCH`,
        body: JSON.stringify({
            'firstName': document.getElementById('firstName').value,
            'lastName': document.getElementById('lastName').value,
            'address': address,
            'phone': document.getElementById('phone').value,
            'email': document.getElementById('email').value,
            'comments': document.getElementById('comments').value,
            'hight': document.getElementById('hight').value,
        }),
        headers: { 'Content-type': `application/json; charset=UTF-8` },
    }).then((response) => {
        if (response.status === 200 && response.status !== undefined) {
            alert(`user with id ${id} Updated successfully`)
        }
        else {
            alert(response.message)
        }
    })
}
