var users = [];
var gender = "";
var currentUser ;

function save_to_localStorage() {                                    // sign up page

    var user = {
        first_name : document.getElementById("fst_name").value,
        last_name : document.getElementById("lst_name").value,
        mobile_no : document.getElementById("Cell_Number").value,
        age : document.getElementById("age").value,
        username : document.getElementById("usr").value,
        password : document.getElementById("psw").value
    };

    console.log("line 16 new user",user);

    if(user.first_name != "" && user.last_name != "" && user.mobile_no != "" && user.age != "" && user.username != "" && user.password != "") {

        if (localStorage.getItem("users"))
            users = JSON.parse(localStorage.getItem("users"));  
            
            console.log("line 21 users extracted from local storage",users);

        var fieldSame = false;                                        //checking same fiels if any...
        for(var i =0 ; i<users.length ; i++) {
            if(users[i].mobile_no === user.mobile_no || users[i].username === user.username) {
                fieldSame = true;
                if(users[i].mobile_no === user.mobile_no)
                    alert("mobile no already taken!!");
                if(users[i].username === user.username)
                    alert("username already taken!!");
                break;
            }
        }
    
        if(fieldSame === false) {
            users.push(user);

            console.log("line 38 new user pushed ",users);

            localStorage.setItem("users", JSON.stringify(users));       //storing user data in local storage :)
            currentUser = user;
            localStorage.setItem("currentUser",JSON.stringify(currentUser));     //saving data of the current user to log in
            location.replace("digity_the_same.html");
            
            
            document.getElementById("fst_name").value = ""
            document.getElementById("lst_name").value = ""
            document.getElementById("Cell_Number").value = ""
            document.getElementById("age").value = ""
            document.getElementById("usr").value = ""
            document.getElementById("psw").value = ""   
    
        }
    }
    else {
        alert("all fields not filled");
    }
}


function checkCredentials() {                         //  login page

    var credential = {
        username : document.getElementById("log_usr").value,
        password : document.getElementById("log_psw").value
    };

    console.log("line 70 credential",credential);

    if (localStorage.getItem("users"))
        users = JSON.parse(localStorage.getItem("users"));  

        console.log("line 73 users",users);

    var c = 0;
    for(var i = 0; i<users.length; i++) {
        
        if(users[i].username === credential.username && users[i].password === credential.password ) {
            c += 1;
            currentUser = users[i];
            localStorage.setItem("currentUser",JSON.stringify(currentUser));  // saving current user
            location.replace("digity_the_same.html");                         // redirecting to home page if credentials match
            break;
        }
    }
    if(c == 0) 
        alert("not found");

}


function maleBox() {
    document.getElementById("male_box").checked = true;
    document.getElementById("female_box").checked = false;
}


function femaleBox() {
    document.getElementById("male_box").checked = false;
    document.getElementById("female_box").checked = true;
}


function checkForUser() {
    
    currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser) {
        document.getElementById("sign_link").text = "";
        document.getElementById("log_link").text = "";
        document.getElementById("user_link").text = "User";
        document.getElementById("user_greetings").text = "Hi!,",currentUser.first_name;
    }
}



function logOut() {
    localStorage.removeItem("currentUser");
    location.reload();
}

