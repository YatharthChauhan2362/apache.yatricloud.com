// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('nameDisplay');
const applyButton = document.getElementById('applyButton');

// Update name function with animation
function updateName() {
  const newName = nameInput.value.trim();
  if (newName) {
    // Add fade-out effect
    nameDisplay.style.opacity = '0';
    nameDisplay.style.transform = 'translateY(-10px)';
    
    // Update content after brief delay for animation
    setTimeout(() => {
      nameDisplay.textContent = newName;
      // Add fade-in effect
      nameDisplay.style.opacity = '1';
      nameDisplay.style.transform = 'translateY(0)';
    }, 200);
  } else {
    // Same animation for default name
    nameDisplay.style.opacity = '0';
    nameDisplay.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      nameDisplay.textContent = 'Yatris';
      nameDisplay.style.opacity = '1';
      nameDisplay.style.transform = 'translateY(0)';
    }, 200);
  }
  nameInput.value = '';
  
  // Add button animation
  applyButton.style.transform = 'scale(0.9)';
  setTimeout(() => {
    applyButton.style.transform = 'scale(1)';
  }, 150);
}

// Event Listeners
applyButton.addEventListener('click', updateName);

nameInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    updateName();
  }
});

// Add transition styles programmatically
nameDisplay.style.transition = 'all 0.3s ease-out';
applyButton.style.transition = 'all 0.15s ease-out';

// Optional: Add input focus animation
nameInput.addEventListener('focus', () => {
  nameInput.style.transform = 'scale(1.02)';
});

nameInput.addEventListener('blur', () => {
  nameInput.style.transform = 'scale(1)';
});