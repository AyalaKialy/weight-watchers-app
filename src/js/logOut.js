function register(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;   
    const city = document.getElementById('city').value;
    const street= document.getElementById('street').value;
    const number  = document.getElementById('number').value;
    const address =new Address(city,street,number);
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const height = document.getElementById('height').value;
    const startWeight = document.getElementById('startWeight').value;
    const weight = new Weight(startWeight);
    const user = new User(firstName,lastName,address,phone,email,height,weight);
    //this.users.push(user);
    alert(`User registered successfully`);

}