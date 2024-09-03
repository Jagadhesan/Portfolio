// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform form validation or send data to a server
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // You can add code here to send the form data to a server using AJAX
    } else {
        alert('Please fill out all fields.');
    }
});
