let docTitle = document.title;
window.addEventListener("blur", () =>{document.title = "Aonde você vai??";})
window.addEventListener("focus", () =>{document.title = docTitle;})
function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }else{
        return true;
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
}

function login(){
   
    firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
    ).then(response => {
        window.location.href = "index.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}
function getErrorMessage(error) {
    if (error.code == "auth/invalid-credential") {
        return "Usuário não encontrado";
    }
    if (error.code == "auth/wrong-password") {
        return "Senha inválida";
    }
    return error.message;
}

function registrar(){
    window.location.href = "cadastro.html";
}
function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        alert('Email enviado com sucesso');
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}