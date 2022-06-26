var usersArray = [];
window.addEventListener('load', () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://localhost:3000/users');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status != 200) 
        {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else 
        {
            usersArray =  JSON.parse(xhr.responseText)
            sessionStorage.setItem('usersArray', JSON.stringify(usersArray));
            getUserById();
        }
    }

});

function getUserById() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const user= this.usersArray.filter(user => user.id==id);
    showUserDetails(user[0])

}

function showUserDetails(currentUser) {
    document.getElementById("userName").innerHTML=currentUser.firstName+" "+currentUser.lastName;
    document.getElementById("id").value=currentUser.id;
    document.getElementById("firstName").value=currentUser.firstName;
    document.getElementById("lastName").value=currentUser.lastName;
    document.getElementById("city").value=currentUser.address.city;
    document.getElementById("street").value=currentUser.address.street;
    document.getElementById("number").value=currentUser.address.number;
    document.getElementById("phone").value=currentUser.phone;
    document.getElementById("email").value=currentUser.email;
    document.getElementById("comments").value=currentUser.comments;
    document.getElementById("hight").value=currentUser.hight;
    document.getElementById("startWeight").innerHTML=currentUser.weight.startWeight;
    document.getElementById("currentWeight").innerHTML=currentUser.weight.meetings[currentUser.weight.meetings.length-1].weight;
    document.getElementById("BMI").innerHTML=((currentUser.weight.meetings[currentUser.weight.meetings.length-1].weight)/Math.pow(currentUser.hight,2)).toFixed(2);

    currentUser.weight.meetings.forEach(meeting => {
        const tmp=document.getElementsByTagName("template")[0];
        let element=tmp.content.cloneNode(true);
        element.querySelector(".date").innerText=meeting.date;
        element.querySelector(".weight").innerText=meeting.weight;
        const weightsTable=document.getElementById('weights');
        weightsTable.append(element);
    });
}
