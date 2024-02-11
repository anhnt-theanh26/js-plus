
const formUpdate = document.querySelector('#form-update');

const namePrd = document.querySelector('#name');
const imagePrd = document.querySelector('#image');
const pricePrd = document.querySelector('#price');
const thongbao = document.querySelector('#thongbao');
const searchParam = new URLSearchParams(document.location.search);
const id = searchParam.get('id');
fetch("http://localhost:3000/products/" + id)
    .then(data => data.json())
    .then(data => {
        namePrd.value = data.name,
            imagePrd.value = data.image,
            pricePrd.value = data.price
    })


formUpdate.addEventListener('submit', e => {
    e.preventDefault();
    let check = '';
    if (namePrd.value.trim() == '') {
        check += 'name san pham khong duoc duoc trong<br>';
    }
    if (imagePrd.value.trim() == '') {
        check += 'image san pham khong duoc duoc trong<br>';
    }
    if (pricePrd.value.trim() == '') {
        check += 'price san pham khong duoc duoc trong<br>';
    }
    if (pricePrd.value.trim() <= 0) {
        check += 'price san pham khong duoc duoc <=0<br>';
    }
    if (check == '') {
        const newUpdate = {
            'name': namePrd.value,
            'image': imagePrd.value,
            'price': pricePrd.value,
        }
        fetch("http://localhost:3000/products/" + id, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUpdate),
        })
            .then(check => {
                if (check.ok) {
                    window.location.href = 'index.html';
                    alert('sua thanh cong san pham');
                }
            })
    } else {
        thongbao.innerHTML = check;
    }
})








