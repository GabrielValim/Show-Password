let eyeIcon = document.getElementById('eyeicon') as HTMLImageElement;
let password = document.getElementById('password') as HTMLInputElement;

eyeIcon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.src = "./imgs/eye-open.png"
    } else {
        password.type = "password";
        eyeIcon.src = "./imgs/eye-close.png"
    }
}
