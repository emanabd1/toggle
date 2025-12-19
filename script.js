document.addEventListener('DOMContentLoaded', () => {
    const toggleText = document.getElementById('toggleText');
    const toggleButton = document.getElementById('toggleButton');

    let isOn = false; // Variable to track state

    toggleButton.addEventListener('click', () => {
        isOn = !isOn; // Toggle the state
        toggleText.textContent = isOn ? 'ON' : 'OFF'; // Update the heading text
        
        // Change text color based on state
        toggleText.style.color = isOn ? '#28a745' : '#dc3545'; // Green for ON, Red for OFF
    });
});
