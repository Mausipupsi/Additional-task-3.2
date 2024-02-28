document.getElementById('createTable').addEventListener('click', function() {
  const rows = document.getElementById('rows').value;
  const cols = document.getElementById('columns').value;
  const errorContainer = document.getElementById('errorContainer');
  const tableContainer = document.getElementById('tableContainer');

  tableContainer.textContent = ''; // Очищення таблиці
  errorContainer.textContent = ''; // Очищення повідомлень про помилки
  
  // Перевірка на порожні значення
  if (!rows || !cols) {
    errorContainer.textContent = 'Please enter the number of rows and columns';
    return;
  }

  // Перевірка на значення більше 9
  if (rows > 9 || cols > 9) {
    errorContainer.textContent = 'The number of rows and columns cannot be more than 9';
    return;
  }

  // Перевірка на негативні числа та мінімальне значення
  if (rows <= 0 || cols <= 0) {
    errorContainer.textContent = 'The number of rows and columns cannot be zero or negative';
    return;
  }

  const table = document.createElement('table');
  for (let i = 1; i <= rows; i++) {
      let tr = document.createElement('tr');
      for (let j = 1; j <= cols; j++) {
          let td = document.createElement('td');
          td.textContent = `${i}${j}`;
          td.addEventListener('click', function() {
              this.style.backgroundColor = this.style.backgroundColor ? '' : 'yellow';
          });
          tr.appendChild(td);
      }
      table.appendChild(tr);
  }
  tableContainer.appendChild(table);
});