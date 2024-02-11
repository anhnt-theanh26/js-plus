'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});





// 186. DOM thực sự hoạt động như thế nào
// 187. Chọn, tạo và xóa các phần tử

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');

// console.log(allSection);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));
// tạo và thêm phần tử element 
// .insertAdjacentHTML 
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'chúng tôi sử dụng cookie để cái thiện chức năng và phần tích.';
message.innerHTML = 'chúng tôi sử dụng cookie để cái thiện chức năng và phần tích. <button class="btn btn--close-cookie">Got it!</button>'
// header.prepend(message); // trèn đầu
header.append(message); // trèn cuối
// header.append(message.cloneNode(true)); // trèn cả trên và dưới
// header.before(message); // trèn trước 
// header.after(message); // trèn sau
// xóa phần tử element
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.remove(); // xóa mới
  message.parentElement.removeChild(message); // xóa cũ
});



// 188. Kiểu dáng, thuộc tính và lớp
message.style.backgroundColor = 'gray';
message.style.width = '120%';
console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(getComputedStyle(message).height);
document.documentElement.style.setProperty('--color-primary', 'orangered')

const logo = document.querySelector('.nav__logo');
logo.alt = 'emiuanhnt';
console.log(logo.alt);
console.log(logo.classList);
console.log(logo.className);
console.log(logo.src);
console.log(logo.disigner);
console.log(logo.getAttribute('disigner'));

logo.setAttribute('company', 'bankist')
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
//thuộc tính dữ liệu
console.log(logo.dataset.versionNumber);
//lớp
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
console.log(logo.classList);
//không dùng
logo.className = 'anhnt';
console.log(logo.className);