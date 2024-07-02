document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');

        var isValid = true;
        var validUsernames = ['admin', 'empleado'];
        var correctPassword = '12345';

        if (!validUsernames.includes(usernameInput.value)) {
            usernameInput.classList.add('is-invalid');
            isValid = false;
        } else {
            usernameInput.classList.remove('is-invalid');
        }

        if (passwordInput.value !== correctPassword) {
            passwordInput.classList.add('is-invalid');
            alert('Contraseña incorrecta. Intenta de nuevo.');
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
        }

        if (isValid) {
            const username = usernameInput.value;

            if (username === 'admin') {
                window.location.href = 'menu.html?role=admin';
            } else if (username === 'empleado') {
                window.location.href = 'menu.html?role=empleado';
            }
        }
    });

    var usernameInput = document.getElementById('username');
    usernameInput.addEventListener('input', function() {
        var validUsernames = ['admin', 'empleado'];
        if (!validUsernames.includes(this.value)) {
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });

    var passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', function() {
        var correctPassword = '12345';
        if (this.value !== correctPassword) {
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });
});
