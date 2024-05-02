import { postRequest } from './api';

const form = document.querySelector('#emailForm');
const modal = document.querySelector('.backdrop');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(e) {
  const statusMessage = e.target.nextElementSibling;
  const inputName = e.target.name;

  if (!e.target.checkValidity() || !e.target.value.trim().length)
    showError(statusMessage, inputName);
  else showSuccess(statusMessage);
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const dataToSend = {};
  formData.forEach((item, index) => (dataToSend[index] = item));

  try {
    const dataToDisplay = await postRequest(dataToSend);
    setModalText(dataToDisplay);

    modal.addEventListener('click', onClick);
    window.addEventListener('keyup', onKeyup);

    e.target.reset();
    e.target
      .querySelectorAll('.status-message')
      .forEach(item => (item.innerText = ''));
  } catch (error) {
    console.error(error);
  }
}

function onClick(e) {
  const closest = e.target.closest('.modal-btn');

  if (!closest && !e.target.classList.contains('backdrop')) return;

  closeModal();
}

function onKeyup(e) {
  if (e.key === 'Escape') closeModal();
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
  document.documentElement.classList.add('is-modal-open');
}

function closeModal() {
  modal.classList.add('is-hidden');
  document.documentElement.classList.remove('is-modal-open');
  modal.removeEventListener('click', onClick);
  window.removeEventListener('keyup', onKeyup);
}
