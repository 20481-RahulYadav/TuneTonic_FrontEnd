const API_BASE_URL = 'https://tune-tonic-api.vercel.app/api/login';

// Login Form Submission
const loginForm = $('#loginForm');

$("#submit").click(function(e) {
    e.preventDefault();

    const email = $("#username").val();
    const password = $("#password").val();

    $.ajax({
        url: API_BASE_URL,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email, password }),
        success: function(data) {
            // On success
            alert('Login successful!');
        },
        error: function(xhr, status, error) {
            // On error
            const errorMessage = xhr.responseJSON ? xhr.responseJSON.message : 'An error occurred';
            alert(`Error: ${errorMessage}`);
        }
    });
});
