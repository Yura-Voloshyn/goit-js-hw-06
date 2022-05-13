// const counterValue = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     },
// };

// const incBtn = document.querySelector('[data-action="increment"]');
// console.log(incBtn);

// const decBtn = document.querySelector('[data-action="decrement"]');
// console.log(decBtn);

// const valueEl = document.querySelector('#value');

// incBtn.addEventListener('click', function () {
//     counterValue.increment();
//     // console.log(counterValue);
//     valueEl.textContent = counterValue.value;
// });

// decBtn.addEventListener('click', function () {
//     counterValue.decrement();
//     // console.log(counterValue);
//     valueEl.textContent = counterValue.value;
// });
const counterValue = {
    value: 0,
    icrement() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
}

const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    showValue: document.querySelector('#value'),
};


console.log(refs.incrementBtn);
console.log(refs.decrementBtn);
console.log(refs.showValue);

refs.incrementBtn.addEventListener('click', onIcrementBtnClick);
refs.decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIcrementBtnClick() {
    console.log('click+1');
    counterValue.icrement();
    refs.showValue.textContent = counterValue.value;
}

function onDecrementBtnClick() {
    console.log('click-1');
    counterValue.decrement();
    refs.showValue.textContent = counterValue.value;
}