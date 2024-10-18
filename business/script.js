document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('form');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data (optional: you can send this data to a server)
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const subject = form.querySelector('input[type="text"]:nth-of-type(2)').value;
        const message = form.querySelector('textarea').value;

        // Display an alert with the user's input
        alert(`Thanks for submitting, ${name}! We will get back to you shortly.`);

        // Optionally, you can clear the form fields after submission
        form.reset();
    });
});

