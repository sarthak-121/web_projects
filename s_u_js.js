var credentials = [];


function save_to_localStorage() {

    var credential = {
        username : document.getElementById("usr").value,
        password : document.getElementById("psw").value
    };

    if (localStorage.getItem("credentials"))
        credentials = JSON.parse(localStorage.getItem("credentials"));   
   
    credentials.push(credential);
    localStorage.setItem("credentials", JSON.stringify(credentials));
    document.getElementById("usr").value = ""
    document.getElementById("psw").value = ""   
}


