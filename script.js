// Check for saved theme preference in localStorage
let currentTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no preference

// Set the body class based on saved theme
document.body.classList.add(currentTheme);

// Function to toggle theme
document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle theme between 'light' and 'dark'
    if (currentTheme === 'light') {
        currentTheme = 'dark';
        document.body.classList.replace('light', 'dark');
    } else {
        currentTheme = 'light';
        document.body.classList.replace('dark', 'light');
    }

    // Save the current theme to localStorage
    localStorage.setItem('theme', currentTheme);
});

// Function to trigger animation on image hover
document.getElementById('image').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.2)';
});

document.getElementById('image').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
