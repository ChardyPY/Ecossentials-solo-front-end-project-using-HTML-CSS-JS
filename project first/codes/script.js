function logout() {
    alert("You have been logged out.");
}

function confirmChanges() {
    if (confirm("Are you sure you want to save these changes?")) {
        alert("Changes saved.");
        return true; // Proceed with form submission
    } else {
        return false; // Cancel form submission
    }
}
