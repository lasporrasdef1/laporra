const userTableBody = document.getElementById("user-table-body");

// Function to retrieve the users and their points from users.json
function getUsers() {
  return fetch("users.json").then((response) => response.json());
}

// Function to create a row in the user table
function createRow(username, points) {
  const row = document.createElement("tr");
  const usernameCell = document.createElement("td");
  const pointsCell = document.createElement("td");
  usernameCell.textContent = username;
  pointsCell.textContent = points;
  row.appendChild(usernameCell);
  row.appendChild(pointsCell);
  return row;
}

// Function to display the users and their points in the user table
function displayUsers() {
  getUsers().then((users) => {
    userTableBody.innerHTML = ""; // Clear existing rows
    Object.keys(users).forEach((username) => {
      const points = users[username];
      const row = createRow(username, points);
      userTableBody.appendChild(row);
    });
  });
}

displayUsers(); // Display the users on page load
