document.getElementById('login-form').addEventListener("submit",(e)=>{
e.preventDefault()
});
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
});

function login(){
    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    });
}

function signUp(){
    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function fog(){
    const email = document.getElementById("login-email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}
