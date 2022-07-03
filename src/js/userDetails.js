const url = new URL('http://localhost:3000/users/');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const newUrl = new URL(id, url);
    const xhr = new XMLHttpRequest();
    xhr.open('GET',newUrl);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            const user = JSON.parse(xhr.responseText);
            showUserDetails(user);
        }
    }
});

function showUserDetails(currentUser) {
    document.getElementById('userName').innerHTML=currentUser.firstName+' '+currentUser.lastName;
    document.getElementById('id').value=currentUser.id;
    document.getElementById('firstName').value=currentUser.firstName;
    document.getElementById('lastName').value=currentUser.lastName;
    document.getElementById('city').value=currentUser.address.city;
    document.getElementById('street').value=currentUser.address.street;
    document.getElementById('number').value=currentUser.address.number;
    document.getElementById('phone').value=currentUser.phone;
    document.getElementById('email').value=currentUser.email;
    document.getElementById('comments').value=currentUser.comments;
    document.getElementById('hight').value=currentUser.hight;
    document.getElementById('startWeight').innerHTML=currentUser.weight.startWeight;
    document.getElementById('currentWeight').innerHTML=currentUser.weight.meetings[currentUser.weight.meetings.length-1].weight;
    document.getElementById('BMI').innerHTML=((currentUser.weight.meetings[currentUser.weight.meetings.length-1].weight)/Math.pow(currentUser.hight,2)).toFixed(2);

    currentUser.weight.meetings.forEach(meeting => {
        const tmp=document.getElementsByTagName('template')[0];
        let element=tmp.content.cloneNode(true);
        element.querySelector('.date').innerText=meeting.date;
        element.querySelector('.weight').innerText=meeting.weight;
        const weightsTable=document.getElementById('weights');
        weightsTable.append(element);
    });
}
