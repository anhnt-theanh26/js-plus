

const form = document.querySelector('#form');
const thongbao = document.querySelector('#thongbao');
const namePrd = document.querySelector('#name');
const imagePrd = document.querySelector('#image');
const pricePrd = document.querySelector('#price');
const catePrd = document.querySelector('#cate');

form.addEventListener('submit', e => {
    e.preventDefault();
    let check = '';
    if (namePrd.value.trim() == '') {
        check += 'name khong duoc de trong<br>';
    }
    if (namePrd.value.length <= 5) {
        check += 'name > 5 ky tu<br>';
    }
    if (imagePrd.value.trim() == '') {
        check += 'image khong duoc de trong<br>';
    }
    if (pricePrd.value <= 0) {
        check += 'price khong duoc de <= 0<br>';
    }
    if (check == '') {
        const prd = {
            'name': namePrd.value,
            'image': imagePrd.value,
            'price': pricePrd.value,
            'cate': catePrd.value,
        }
        fetch('http://localhost:3000/products', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(prd),
        })
            .then(check => {
                if (check.ok) {
                    window.location.href = 'index.html';
                    alert('them thanh cong');
                }
            })
    } else {
        thongbao.innerHTML = check;
    }
})