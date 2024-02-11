const prd = document.querySelector('#prd');

const showPrd = () => {
    fetch("http://localhost:3000/products")
        .then(data => data.json())
        .then(data => {
            prd.innerHTML = data.map((item, index) =>
                `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td><img src="${item.image}" alt="" width="50px"></td>
                    <td>${item.price}</td>
                    <td>
                        <button id="btn-delete" data-id="${item.id}">delete</button>
                        <a href="update.html?id=${item.id}"><button>update</button></a>
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
                    const id = btn.dataset.id;
                    if (confirm('xoa san pham')) {
                        fetch("http://localhost:3000/products/" + id, {
                            method: 'delete',
                        })
                    }
                })
            }
        })
}
showPrd();