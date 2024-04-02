import './test.scss'

const span = document.createElement('span');

span.textContent = 'Hello world';

document.body.appendChild(span);
console.log(process.env.NODE_ENV);