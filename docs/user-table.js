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
      });
      row.appendChild(usernameCell);
      row.appendChild(pointsCell);
      userTable.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error retrieving user data:', error);
  });
