window.addEventListener('load', () => {
    const xhr = new XMLHttpRequest();
});

function getUserById(id) {
    const xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:3000/users');
        xhr.send();
        xhr.onload = () => {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                const allUsers = JSON.parse(xhr.responseText);
                const user= allUsers.filter(user => user.id==id);
                showUserDetails(user[0])
            }
        }
}

// function getUserByEmail(emailAddress) {
//     const xhr = new XMLHttpRequest();
//         xhr.open("GET", 'http://localhost:3000/users');
//         xhr.send();
//         xhr.onload = function () {
//             if (xhr.status != 200) {
//                 alert(`Error ${xhr.status}: ${xhr.statusText}`);
//             } else {
//                 const allUsers = JSON.parse(xhr.responseText);
//                 const user=allUsers.filter(user => user.emailAddress==emailAddress);
//                 showUserDetails(user[0])
//             }
//         }
// }

function showUserDetails(currentUser) {
    document.getElementById("id").value=currentUser.id;
    document.getElementById("firstName").value=currentUser.firstName;
    document.getElementById("lastName").value=currentUser.lastName;
    document.getElementById("city").value=currentUser.city;
    document.getElementById("street").value=currentUser.street;
    document.getElementById("number").value=currentUser.number;
    document.getElementById("phone").value=currentUser.phone;
    document.getElementById("email").value=currentUser.email;
    document.getElementById("comments").value=currentUser.comments;
    document.getElementById("height").value=currentUser.height;
    document.getElementById("startWeight").value=this.currentUser.weight.startWeight;
    document.getElementById("currentWeight").value=this.currentUser.weight[this.currentUser.meeting.length-1].weight;
    document.getElementById("BMI").value=(currentUser.weightsHistory[currentUser.weightsHistory.length-1].weight)/Math.pow(currentUser.height,2)

    // currentUser.weight.forEach(meeting => {
    //     const tmp=document.getElementsByTagName("template")[0];
    //     let element=tmp.content.cloneNode(true);
    //     element.querySelector(".date").innerText=meeting.date;
    //     element.querySelector(".weight").innerText=meeting.weight;
    //     const weightsTable=document.getElementById('weights');
    //     weightsTable.append(element);
    // });
}