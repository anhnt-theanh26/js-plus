const search = new URLSearchParams(document.location.search);
const id = search.get('id');
const form = document.querySelector('#form');
const thongbao = document.querySelector('#thongbao');
const namePrd = document.querySelector('#name');
const imagePrd = document.querySelector('#image');
const pricePrd = document.querySelector('#price');
const catePrd = document.querySelector('#cate');

fetch('http://localhost:3000/products/' + id)
    .then(data => data.json())
    .then(data => {
        namePrd.value = data.name,
            imagePrd.value = data.image,
            pricePrd.value = data.price,
            catePrd.value = data.cate
    })
form.addEventListener('submit', e => {
    e.preventDefault();
    let check = '';
    if (namePrd.value.trim() == '') {
        check += 'name khong duoc de trong<br>';
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
        fetch('http://localhost:3000/products/' + id, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(prd),
        })
            .then(check => {
                if (check.ok) {
                    window.location.href = 'index.html';
                    alert('sua thanh cong');
                }
            })
    } else {
        thongbao.innerHTML = check;
    }
})