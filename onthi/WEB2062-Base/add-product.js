

// const prdName = document.querySelector('#name');
// const prdPrice = document.querySelector('#price');
// const prdImg = document.querySelector('#img');
// const addForm = document.querySelector('#form-add');
// const thongbao = document.querySelector('#thongbao');
// console.log(prdImg.value, prdName.value, prdPrice.value);
// addForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let check = '';
//     if (prdName.value.trim() === '') {
//         check = check + 'vui lòng nhập tên<br>';
//     }
//     if (prdImg.value.trim() === '') {
//         check = check + 'vui lòng nhập địa chỉ ảnh<br>'
//     }
//     if (prdPrice.value == '') {
//         check = check + 'vui lòng nhập giá<br>'
//     }
//     if (prdPrice.value <= 0) {
//         check = check + 'giá sản phẩm phải lớn hơn 0<br>'
//     }
//     if (check === '') {
//         let newProduct = {
//             "name": prdName.value,
//             "image": prdImg.value,
//             "price": prdPrice.value
//         }
//         fetch("http://localhost:3000/products/", {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newProduct),
//         })
//             .then(check => {
//                 if (check.ok) {
//                     alert('thêm thành công sản phẩm');
//                 }
//             })
//     } else {
//         thongbao.innerHTML = `$ {check}`
//     }
// });

const addForm = document.querySelector('#form-add');
const prdName = document.querySelector('#name');
const img = document.querySelector('#img');
const price = document.querySelector('#price');
const thongbao = document.querySelector('#thongbao');
addForm.addEventListener('submit', (e) => {
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
    if (check === '') {

        let newProduct = {
            'name': prdName.value,
            'image': img.value,
            'price': price.value,
        }
        fetch('http://localhost:3000/products/', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(check => {
                if (check.ok) {
                    alert('ok');
                }
            })
    }else{
        thongbao.innerHTML = check;
    }

})
