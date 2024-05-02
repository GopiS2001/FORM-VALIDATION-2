document.getElementById('myForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var isValid = true;
  
    // Reset error messages
    usernameError.innerHTML = '';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';
    confirmPasswordError.innerHTML = '';
  
    // Username validation
    if (username.length < 3) {
      usernameError.innerHTML = 'Username must be at least 3 characters';
      isValid = false;
    }
  
    // Email validation
    if (!isValidEmail(email)) {
      emailError.innerHTML = 'Invalid email format';
      isValid = false;
    }
  
    // Password validation
    if (password.length < 6) {
      passwordError.innerHTML = 'Password must be at least 6 characters';
      isValid = false;
    }
  
    // Confirm Password validation
    if (password !== confirmPassword) {
      confirmPasswordError.innerHTML = 'Passwords do not match';
      isValid = false;
    }
  
    if (!isValid) {
      event.preventDefault(); // Prevent form submission
    }
  });
  
  function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  