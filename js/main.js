let btnRegister = document.getElementById("btnRegister");
btnRegister.addEventListener("click", () => {
    let userName = document.getElementById("txtUserName").value;
    let password = document.getElementById("txtPassword").value;

    let userDto = {
        userName: userName,
        password: password
    };

    /*
    */
    console.log(userDto);
    console.log(JSON.stringify(userDto));
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let uri = 'http://localhost:8080/api/auth/register';
    fetch(uri, {
        method: 'POST',
        body: JSON.stringify(userDto), 
        headers:headers
    });
});