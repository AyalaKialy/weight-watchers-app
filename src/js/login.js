function login(){
    debugger
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
                debugger
                const data=JSON.parse(xhr.responseText);
                if(data.manager[0].email===email && data.manager[0].password===password){
                    alert(`Manager`); 
                }
                else{
                    for(let i=0; i<data.users.length;i++){ 
                        if(data.users[i].email===email && data.users[i].password===password){
                            alert(`User ${data.users[i].firstName}`);
                        }
                      }
                }
                  
                  }
                }
}
    
