const gridContainer = document.getElementById('grid');
const inputBox = document.getElementById('inputBox');
for (let i = 1; i <= 9; i++) {
  const button = document.createElement('div');
  button.className = 'grid-item';
  button.textContent = i;
  button.dataset.value = i;
  gridContainer.appendChild(button);
}

document.getElementById('colorForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const inputValue = parseInt(inputBox.value, 10);
  document.querySelectorAll('.grid-item').forEach((button) => {
    if (parseInt(button.dataset.value, 10) === inputValue) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  inputBox.value = '';
});
