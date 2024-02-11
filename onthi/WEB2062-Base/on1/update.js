const formUpdate = document.querySelector('#form-update');
const thongbao = document.querySelector('#thongbao');
const name = document.querySelector('#name');
const image = document.querySelector('#image');
const price = document.querySelector('#price');
const searchParam = new URLSearchParams(document.location.search);
const id = searchParam.get('id');
fetch("http://localhost:3000/products/" + id)
    .then(data => data.json())
    .then(data => {
        name.value = data.name,
            image.value = data.image,
            price.value = data.price
    })

formUpdate.addEventListener('submit', e => {
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
        fetch("http://localhost:3000/products/" + id, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newApp),
        })
            .then(check => {
                if (check.ok) {
                    window.location.href = 'index.html';
                    alert('sua san pham thanh cong');
                }
            })
    } else {
        thongbao.innerHTML = check;
    }

})