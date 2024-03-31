var eyeIcon = document.getElementById('eyeicon');
var password = document.getElementById('password');
eyeIcon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.src = "./imgs/eye-open.png";
    }
    else {
        password.type = "password";
        eyeIcon.src = "./imgs/eye-close.png";
    }
};
