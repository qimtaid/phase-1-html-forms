document.addEventListener('DOMContentLoaded', function() {
    // Access the form element
    const form = document.getElementById('user-form');

    // Add event listener to the form for submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Log form data to the console (replace with actual submission logic)
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        // You can add AJAX request or other form submission logic here
    });
});
