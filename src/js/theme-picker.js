const themePicker = document.querySelector('.theme-picker-form');
const formInputs = themePicker?.elements;

const storedTheme = localStorage.getItem('picked-theme') ?? 'red';

if (formInputs) formInputs[storedTheme].checked = true;

themePicker?.addEventListener('change', e => {
  localStorage.setItem('picked-theme', e.target.value);
});
