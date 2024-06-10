var email = sessionStorage.EMAIL_USUARIO;
var nome = sessionStorage.NOME_USUARIO;

var quizDash = document.getElementById("a_link_dash")
var dashQuiz = document.getElementById("a_link_quiz")

if (email == undefined && nome == undefined) {
    quizDash.style.display = "block"
    dashQuiz.style.display = "none"
    b_usuario.innerHTML = "Login"
} else {
    quizDash.style.display = "none"
    dashQuiz.style.display = "block"
}