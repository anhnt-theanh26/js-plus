const searchParam = new URLSearchParams(document.location.search);
const id = searchParam.get('id');
const thongbao = document.querySelector('#thongbao');
const prdName = document.querySelector('#name');
const prdImg = document.querySelector('#img');
const prdPrice = document.querySelector('#price');
const formUpdate = document.querySelector('#form-update');
// const thongbao = document.querySelector('thongbao');

fetch("http://localhost:3000/products/" + id)
    .then(data => data.json())
    .then(data => {
        prdName.value = data.name,
            prdImg.value = data.image,
            prdPrice.value = data.price
    });

    
formUpdate.addEventListener('submit', (e) => {
    e.preventDefault();
    let check = '';
    if (prdName.value.trim() == '') {
        check += 'khong duoc de trong ten san pham<br>';
    }
    if (img.value.trim() == '') {
        check += 'khong duoc de trong image san pham<br>';
    }
    if (price.value == '') {
        check += 'khong duoc de trong price san pham<br>';
    }
    if (img.value <= 0) {
        check += 'price san pham phai lon hon 0<br>';
    }
    if (check == '') {
        const newUpdate = {
            'name': prdName.value,
            'image': prdImg.value,
            'price': prdPrice.value
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
                    alert('sua thanh cong san pham');
                }
            })
    } else {
        thongbao.innerHTML = check;
    }
})

