
const formAdd = document.querySelector('#form-add');

const namePrd = document.querySelector('#name');
const imagePrd = document.querySelector('#image');
const pricePrd = document.querySelector('#price');
const thongbao = document.querySelector('#thongbao');




formAdd.addEventListener('submit', e => {
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
        const newAdd = {
            'name': namePrd.value,
            'image': imagePrd.value,
            'price': pricePrd.value,
        }
        fetch("http://localhost:3000/products", {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newAdd),
        })
            .then(check => {
                if (check.ok) {
                    window.location.href = 'index.html';
                    alert('them thanh cong san pham');
                }
            })
    } else {
        thongbao.innerHTML = check;
    }
})








