const formAdd = document.querySelector('#form-add');
const thongbao = document.querySelector('#thongbao');
const name = document.querySelector('#name');
const image = document.querySelector('#image');
const price = document.querySelector('#price');

formAdd.addEventListener('submit', e => {
    e.preventDefault();
    let check = '';
    if (name.value.trim() == '') {
        check += 'name san pham khong duoc de trong<br>';
    }
    if (image.value.trim() == '') {
        check += 'image san pham khong duoc de trong<br>';
    }
    if (price.value.trim() == '') {
        check += 'price san pham khong duoc de trong<br>';
    } if (price.value.trim() == '') {
        check += 'price san pham khong duoc <=0<br>';
    }
    if (check == '') {
        const newApp = {
            'name': name.value,
            'image': image.value,
            'price': price.value,
        }
        fetch("http://localhost:3000/products", {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newApp),
        })
            .then(check => {
                if (check.ok) {
                    window.location.href = 'index.html';
                    alert('them san pham thanh cong');
                }
            })
    } else {
        thongbao.innerHTML = check;
    }

})