// How to change the background color of the header
document.querySelector('#myheader').addEventListener('click', (e) => {
    changeText()
});

const changeText = () => {
    if (document.querySelector('#myheader').innerHTML != 'JavaScript Tutorial') {
        document.querySelector('#myheader').innerHTML = 'JavaScript Tutorial';
        document.querySelector('#myheader').className = 'error grey';

    } else {
        document.querySelector('#myheader').innerHTML = 'JS For Beginners';
        document.querySelector('#myheader').className = 'bg-dark';
    }
}
// How to change the background color of the header

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
const users = document.querySelector('#users');


myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    /* console.log('submit successful'); */
    if (nameInput.value === '' || emailInput.value === '') {
        /* alert('Filled cannot be empty') */
        msg.innerHTML = 'Field cannot be empty';
        msg.classList.add('error');
        btn.classList.add('error');

        setInterval(() => {
            msg.remove();
        }, 3000)

    } else {
        msg.innerHTML = 'Sent successful';
        msg.classList.add('bg-dark');

        setInterval(() => {
            msg.remove();
        }, 3000)

        // Creating element
        const li = document.createElement('LI');
        li.innerHTML = `${nameInput.value}: ${emailInput.value}`;
        users.appendChild(li);
        nameInput.value = ''
        emailInput.value = ''


        /* console.log('submit successfully'); */
    }
});
