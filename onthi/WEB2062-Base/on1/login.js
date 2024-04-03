
const form = document.querySelector('#form');
const thongbao = document.querySelector('#thongbao');
const user = document.querySelector('#user');
const pass = document.querySelector('#pass');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('http://localhost:3000/users/')
        .then(data => data.json())
        .then(data => {
            const account = data.find(acc => acc.username === user.value);
            if (account?.password === pass.value) {
                window.location.href = 'index.html';
                alert(`xin chao: ${user.value}`);
            } else {
                thongbao.innerHTML = 'tai khoan khong ton tai';
            }
        })

})