import { postRequest } from './api';

const form = document.querySelector('#emailForm');
const modal = document.querySelector('.backdrop');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

modal.addEventListener('click', e => {
  const closest = e.target.closest('.modal-btn');

  if (!closest && !e.target.classList.contains('backdrop')) return;

  modal.classList.add('is-hidden');
  document.body.classList.add('.modal-open');
});

window.addEventListener('keyup', onKeyup);

function onInput(e) {
  const statusMessage = e.target.nextElementSibling;
  const inputName = e.target.name;

  if (!e.target.checkValidity()) showError(statusMessage, inputName);
  else showSuccess(statusMessage);
}

async function onSubmit(e) {
  e.preventDefault();

  document.body.classList.add('modal-open');

  const formData = new FormData(e.target);
  const dataToSend = {};
  formData.forEach((item, index) => (dataToSend[index] = item));

  try {
    const dataToDisplay = await postRequest(dataToSend);
    setModalText(dataToDisplay);
  } catch (error) {
    console.error(error);
  }
}

function onKeyup(e) {
  if (e.key === 'Escape') {
    modal.classList.add('is-hidden');
    document.body.classList.add('modal-open');
  }
}

function showError(ref, inputName) {
  ref.innerText = `Invalid ${inputName}, try again`;
  ref.classList.remove('success');
  ref.classList.add('error');
}

function showSuccess(ref) {
  ref.innerText = 'Success';
  ref.classList.remove('error');
  ref.classList.add('success');
}

function setModalText({ title, message }) {
  modal.classList.remove('is-hidden');
  modal.querySelector('.modal-title').innerText = title;
  modal.querySelector('.modal-captain').innerText = message;
}
