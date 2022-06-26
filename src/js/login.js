function login() {
    const meansOfIdentification = document.getElementById('meansOfIdentification').value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://localhost:3000/users');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        }
        else {
            let found = false;
            const users = JSON.parse(xhr.responseText);
            users.forEach(user => {
                if (user.email == meansOfIdentification || user.phone == meansOfIdentification) {
                    found = true;
                    window.location.href = `../html/userDetails.html/${user.id}`;
                }
            }
            );
            if (!found) {
                alert('User not found');
            };
        }
    }
}
