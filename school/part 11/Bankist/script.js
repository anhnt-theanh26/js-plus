'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Nguyễn Thế Anh',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Ngụy Anh',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'A Tiện',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'EMIUANHNT',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// start

// 148. Tạo các phần tử DOM // 164. Sắp xếp mảng
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // 164. Sắp xếp mảng
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const type2 = mov > 0 ? 'tiền gửi' : 'tiền rút';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type2}</div>
        <div class="movements__value">${mov}</div>
      </div>
            ` ;

    containerMovements.insertAdjacentHTML('afterbegin', html); // chèn đoạn code html vào 'containerMovements' 
    // containerMovements.insertAdjacentHTML('beforeend', html);

  });
}

// displayMovements(account1.movements); // hiển thị chuyển động

// console.log(containerMovements.innerHTML);

// 149. Thử thách viết mã số 1
// 150. Chuyển đổi dữ liệu: ánh xạ, lọc, thu nhỏ
// 151. Phương pháp bản đồ

// 152. Tên người dùng máy tính
const user = 'Nguyễn Thế Anh';

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(i => i.at(0)).join('');
  });
}
createUsernames(accounts); // tạo username cho các account
// console.log(accounts);


// 153. Phương pháp lọc
// 154. Phương pháp rút gọn
const calPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc += mov, 0);
  labelBalance.textContent = `${acc.balance} €`
}
// calPrintBalance(account1); // hiển thị tương đối số dư, (số dư)

// const maxBalance = movements.reduce((acc, mov) => {
//   if (acc > mov)
//     return acc;
//   else
//     return mov
// }, movements.at(0));
// console.log(maxBalance);

//156. Sự kỳ diệu của các phương pháp xâu chuỗi
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => mov + acc, 0)
  labelSumIn.textContent = `${incomes} €`;
  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => mov + acc, 0)
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interst = acc.movements.filter(mov => mov > 0)
    .map(mov => mov * acc.interestRate / 100)
    .filter((mov, i, arr) => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(interst);
  labelSumInterest.textContent = `${interst} €`
}

// calcDisplaySummary(account1); // hiển thị tóm tắt số dư



// 157. Thử thách viết mã số 3
// 158. Phương pháp tìm
// 159. Thực hiện đăng nhập
//tài khoản hiện tại
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // ngăn chặn việc tải lại trang
  // hiển thị tin nhắn
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // hiển thị tin nhắn
    labelWelcome.textContent = `Chào mừng: ${currentAccount.owner}`;
    containerApp.style.opacity = 100;

    // xóa các thông tin đăng nhập ở màn hình, xóa trường đăng nhập 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // xóa dấu con trỏ nhấp nháy sau khi đăng nhập
    // alert(`xin chào ${currentAccount.owner}`);
    // hiển thị chuyển động
    displayMovements(currentAccount.movements);
    // hiển thị sự cân , tương đối số dư
    calPrintBalance(currentAccount);
    // hiển thị tóm tắt 
    calcDisplaySummary(currentAccount);


  }
})

// 160. Thực hiện chuyển giao
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && amount <= currentAccount.balance && receiverAcc && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);// thực hiện trừ tiền
    receiverAcc.movements.push(amount);// thực hiện chuyển tiền
    // cập nhật giao diện người dùng 
    updateUI(currentAccount);
  }

});

// cập nhật giao diện người dùng 
const updateUI = function (acc) {
  // hiển thị chuyển động
  displayMovements(acc.movements);
  // hiển thị sự cân , tương đối số dư
  calPrintBalance(acc);
  // hiển thị tóm tắt 
  calcDisplaySummary(acc);
}

// 161. Phương thức findIndex

// xóa tài khoản
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    const index = accounts.findIndex(acc => acc.username = inputCloseUsername.value);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

// 162. một số và mọi
//demo
// console.log(movements);
// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // thêm phong chào
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

// 163. phẳng và bản đồ phẳng
// 164. Sắp xếp mảng
let sorter = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorter);
  // console.log(sorter);
  sorter = !sorter;
  // console.log(sorter);
});

// 165. Nhiều cách khác để tạo và điền mảng
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.fill(2, 3, 5);
// console.log(arr);
// console.log(new Array(1, 2, 3, 4, 5, 6));
// const x = new Array(7);
// console.log(x);
// x.fill(1, 3, 5);
// console.log(x);
// x.fill(1)

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// const i = Array.from({ length: 100 }, (_i) => Math.floor(Math.random() * 100));
// console.log(i);
// lấy dữ liệu từ màn hình
// labelBalance.addEventListener('click', function (e) {
//   e.preventDefault();
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => el.textContent.replace('€', ''));
//   console.log(movementsUI);
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2);
// });

// 166. Tóm tắt: Sử dụng phương pháp mảng nào?

