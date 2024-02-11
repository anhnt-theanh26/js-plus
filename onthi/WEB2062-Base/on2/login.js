
const formLogin = document.querySelector('#form-login');

const user = document.querySelector('#user');
const pass = document.querySelector('#pass');

const thongbao = document.querySelector('#thongbao');

formLogin.addEventListener('submit', e => {
    e.preventDefault();
    fetch("http://localhost:3000/users")
        .then(data => data.json())
        .then(data => {
            const account = data.find(acc => acc.username == user.value);
            if (account?.password === pass.value) {
                window.location.href = 'index.html';
                alert(`xin chao: ${account.username}`);
            }
        }
        )
})

