const themePicker = document.querySelectorAll('.theme-picker-form');

themePicker.forEach(item => {
  const formInputs = item?.elements;
  const storedTheme = localStorage.getItem('picked-theme') ?? 'red';

  if (formInputs) formInputs[storedTheme].checked = true;

  item?.addEventListener('change', e => {
    localStorage.setItem('picked-theme', e.target.value);
  });
});
