const userTable = document.querySelector('#user-table tbody');

fetch('users.json')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const row = document.createElement('tr');
      const usernameCell = document.createElement('td');
      usernameCell.textContent = user.username;
      const pointsCell = document.createElement('td');
      pointsCell.textContent = user.points;
      const actionsCell = document.createElement('td');
      const addButton = document.createElement('button');
      addButton.textContent = '+1';
      addButton.addEventListener('click', () => {
        user.points += 1;
        pointsCell.textContent = user.points;
      });
      actionsCell.appendChild(addButton);
      row.appendChild(usernameCell);
      row.appendChild(pointsCell);
      row.appendChild(actionsCell);
      userTable.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error retrieving user data:', error);
  });
