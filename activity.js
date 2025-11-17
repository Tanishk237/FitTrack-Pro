// Activity Log Page

let activities = JSON.parse(localStorage.getItem('activities')) || initialActivities;
let currentFilter = 'all';

// DOM elements
const activityList = document.getElementById('activityList');
const activityModal = document.getElementById('activityModal');
const successModal = document.getElementById('successModal');
const activityForm = document.getElementById('activityForm');
const addActivityBtn = document.getElementById('addActivityBtn');
const closeModal = document.getElementById('closeModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const cancelBtn = document.getElementById('cancelBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Load and display activities
function loadActivities() {
    activities = JSON.parse(localStorage.getItem('activities')) || initialActivities;
    displayActivities();
}

function displayActivities() {
    activityList.innerHTML = '';
    
    const filtered = currentFilter === 'all' 
        ? activities 
        : activities.filter(a => a.time === currentFilter);
    
    if (filtered.length === 0) {
        activityList.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-light);">No activities found for this filter.</div>';
        return;
    }
    
    filtered.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-info">
                <div class="activity-name">${activity.name}</div>
                <div class="activity-details">
                    <span>Duration: ${activity.duration} mins</span>
                    <span>Calories: ${activity.calories} cal</span>
                    <span class="activity-badge badge-${activity.time}">${activity.time}</span>
                </div>
            </div>
        `;
        activityList.appendChild(activityItem);
    });
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        displayActivities();
    });
});

// Modal functionality
addActivityBtn.addEventListener('click', () => {
    activityModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    activityModal.classList.remove('active');
    activityForm.reset();
});

cancelBtn.addEventListener('click', () => {
    activityModal.classList.remove('active');
    activityForm.reset();
});

closeSuccessModal.addEventListener('click', () => {
    successModal.classList.remove('active');
});

// Close modal on overlay click
activityModal.addEventListener('click', (e) => {
    if (e.target === activityModal) {
        activityModal.classList.remove('active');
        activityForm.reset();
    }
});

// Form validation and submission
activityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('activityName').value.trim();
    const duration = parseInt(document.getElementById('activityDuration').value);
    const calories = parseInt(document.getElementById('activityCalories').value);
    const time = document.getElementById('activityTime').value;
    
    // Validation
    if (!name || name.length < 2) {
        alert('Activity name must be at least 2 characters long.');
        return;
    }
    
    if (duration < 1 || duration > 1000) {
        alert('Duration must be between 1 and 1000 minutes.');
        return;
    }
    
    if (calories < 1 || calories > 10000) {
        alert('Calories must be between 1 and 10000.');
        return;
    }
    
    // Add new activity
    const newActivity = {
        id: Date.now(),
        name: name,
        duration: duration,
        calories: calories,
        time: time
    };
    
    activities.push(newActivity);
    localStorage.setItem('activities', JSON.stringify(activities));
    
    // Close form modal and show success
    activityModal.classList.remove('active');
    activityForm.reset();
    successModal.classList.add('active');
    
    // Update display
    displayActivities();
    
    // Auto-close success modal after 2 seconds
    setTimeout(() => {
        successModal.classList.remove('active');
    }, 2000);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadActivities();
});

