const themePicker = document.querySelectorAll('.theme-picker-form');

themePicker.forEach(item => {
  const formInputs = item?.elements;
  const storedTheme = localStorage.getItem('picked-theme') ?? 'red';

  formInputs['theme-picker'].forEach(
    item => (item.checked = storedTheme === item.value)
  );

  // formInputs.forEach(item => (item.checked = storedTheme === item.value));

  item?.addEventListener('change', e => {
    localStorage.setItem('picked-theme', e.target.value);
  });
});
