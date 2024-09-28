// // // show sản phẩm
// const prd = document.querySelector('#prd');
// const showPro = () => {
//     fetch("http://localhost:3000/products")
//         .then((response) => response.json())
//         .then((data) => {
//             prd.innerHTML = data.map((item, index) => {
//                 return `
//                 <tr>
//                    <td>${index + 1}</td>
//                     <td>${item.name}</td>
//                     <td><img src="${item.image}" alt="" width="100px"></td>
//                     <td>${item.price}</td>
//                     <td>
//                     <button class="btn-delete" data-id="${item.id}">xóa</button>
//                     <button class="btn-edit" data-id="${item.id}">sửa</button>
//                     </td>
//                 </tr>
//                 `;
//             }).join(' ');
//         })
//         .then(() => {
//             const btnDelete = document.querySelectorAll('.btn-delete');
//             for (const btn of btnDelete) {
//                 btn.addEventListener('click', () => {
//                     if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
//                         let id = btn.dataset.id;
//                         fetch("http://localhost:3000/products/" + id, {
//                             method: 'delete',
//                         });
//                     }
//                 });

//             }
//         });
// };
// // showPro();


const prd = document.querySelector('#prd');
const showPro = () => {
    fetch("http://localhost:3000/products")
        .then(data => data.json())
        .then(data => {
            prd.innerHTML = data.map((item, index) =>
                `
                <tr>
                    <td>${index +1}</td>
                    <td>${item.name}</td>
                    <td><img src="${item.image}" alt="" width="50px"></td>
                    <td>${item.price}</td>
                    <td>
                        <button class="btn-delete" data-id="${item.id}">xóa</button>
                        <a href="update-product.html?id=${item.id}"><button class="btn-edit" data-id="${item.id}">sua</button></a>
                    </td>
                </tr>
                `
            ).join('')
        })
        .then(() => {
            const btnDelete = document.querySelectorAll('.btn-delete');
            for (const btn of btnDelete) {
                btn.addEventListener('click', (e) => {
                    if (confirm('xoas')) {
                        e.preventDefault();
                        const id = btn.dataset.id;
                        fetch("http://localhost:3000/products/" + id, {
                            method: 'delete',
                        })
                    }
                })
            }
        })
}

showPro();
