document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit').addEventListener('click', submitForm);
  
    function submitForm() {
        var nameInput = document.querySelector('.name');
        var emailInput = document.querySelector('.mailmsg');
        var messageInput = document.querySelector('.msg');
    
        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
          alert('Please fill in all fields before submitting.');
        } else {
          alert('Message sent!');
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
        }
      }
  });