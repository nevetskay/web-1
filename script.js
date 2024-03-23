
const form = document.querySelector('.container');
const usernameInput = form.querySelector('.username');
const emailInput = form.querySelector('.email');
const passwordInput = form.querySelector('.password');
const confirmPasswordInput = form.querySelector('.passwordConfirm');

form.addEventListener('submit', (event) => {
    // Отменяем действие по умолчанию
    event.preventDefault();

    // Получаем значения полей формы
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmpassword = confirmPasswordInput.value;

    // Проверяем, что поля заполнены
    if (!username || !email || !password || !confirmpassword) {
        alert('Please, fill out all fields');
        return;
    }

    // Проверяем, что имя пользователя содержит только буквы и цифры
    if (!isValidUsername(username)) {
        alert('Login can only contain letters and numbers');
        return;
    }

    // Проверяем, что e-mail корректный
    if (!isValidEmail(email)) {
        alert('E-mail does not match form letters123@gmail.com');
        return;
    }

    // Проверяем, что пароль содержит хотя бы одну заглавную букву, одну строчную букву и одну цифру
    if (!isValidPassword(password)) {
        alert('The password must contain at least one uppercase letter, one lowercase letter and one number');
        return;
    }

    // Проверяем, что пароли совпадают
    if (password !== confirmpassword) {
        alert('Passwords mismatch');
        return;
    }

    // Если всё в порядке, отправляем форму
    form.submit();
});

function isValidUsername(username) {
    // Проверка имени регулярным выражением
    const pattern = /^[a-zA-Z0-9]{3,20}$/;
    return pattern.test(username);
}

function isValidEmail(email) {
    // Проверка email регулярным выражением
    const pattern = /[a-z0-9]+@/;
    return pattern.test(email);
}
function isValidPassword(password) {
    // Проверка пароля регулярным выражением
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
    return pattern.test(password);
}
