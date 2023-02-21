const form = document.querySelector('#login-form');
const authMessage = document.querySelector('#auth-message');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');

  fetch('users.json')
    .then(response => response.json())
    .then(users => {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        authMessage.textContent = 'Successfully identified!';
      } else {
        authMessage.textContent = 'Wrong username or password.';
      }
    })
    .catch(error => {
      console.error('Error retrieving user data:', error);
    });
});
