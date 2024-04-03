const prd = document.querySelector('#prd');

fetch('http://localhost:3000/products')
    .then(data => data.json())
    .then(data => {
        prd.innerHTML = data.map((item, index) =>
            `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="image" width="50px"></td>
            <td>${item.price}</td>
            <td>${item.cate}</td>
            <td>
                <button id="btn-delete" data-id="${item.id}">xoa</button>
                <a href="update.html?id=${item.id}"><button>sua</button></a>
            </td>
        </tr>
        `
        ).join('')
    })
    .then(() => {
        const btnDelete = document.querySelectorAll('#btn-delete');
        for (const btn of btnDelete) {
            btn.addEventListener('click', e => {
                e.preventDefault();
                if (confirm('xoa?')) {
                    const id = btn.dataset.id;
                    fetch('http://localhost:3000/products/' + id, {
                        method: 'delete',
                    })
                }
            })
        }
    })