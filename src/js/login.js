function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../../dataFile.json", true);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status != 200){
            alert(`Error:${xhr.status}`); 
        }
        else{
                const data=JSON.parse(xhr.responseText);
                if(data.manager[0].email===email && data.manager[0].password===password){
                    if (user.password == "manager1" && user.email =="manager@gmail.com"){
                        window.location.href = `../html/manager.html`;
                    }
                    else {
                        window.location.href = `../html/userDetails.html/${user.id}`;
                    } 
                }
                else{
                    alert("user not found");
                }
                  
                  }
                }
}
    
