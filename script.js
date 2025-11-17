// Daily Wellness Overview Page

// Update live clock with smoother animation
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('liveClock').textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Add motivational messages
const motivationalMessages = [
    "You're doing great! Keep it up!",
    "Every step counts towards your goal!",
    "Stay hydrated and stay healthy!",
    "You've got this! Push a little more!",
    "Consistency is key to success!"
];

// Load wellness data with enhanced animations
function loadWellnessData() {
    const data = JSON.parse(localStorage.getItem('wellnessData')) || wellnessData;
    
    // Update steps with animation
    const stepsPercent = (data.steps / 10000) * 100;
    updateCircularProgress('stepsCircle', stepsPercent);
    animateCountUp('stepsValue', data.steps, 1000);
    
    // Update calories with animation
    const caloriesPercent = (data.caloriesBurned / 2000) * 100;
    updateCircularProgress('caloriesCircle', caloriesPercent);
    animateCountUp('caloriesValue', data.caloriesBurned, 1000);
    
    // Update water with animation
    const waterPercent = (data.waterIntake / 8) * 100;
    updateCircularProgress('waterCircle', waterPercent);
    document.getElementById('waterValue').textContent = data.waterIntake;
    
    // Update other stats with animation
    animateCountUp('goalProgress', data.goalProgress, 1000, '%');
    animateCountUp('activeMinutes', data.activeMinutes, 1000, '');
    
    const heartRateEl = document.getElementById('heartRate');
    heartRateEl.textContent = data.heartRate + ' bpm';
}

// Animate count up effect
function animateCountUp(elementId, endValue, duration, suffix = '') {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
        element.textContent = currentValue.toLocaleString() + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Update circular progress
function updateCircularProgress(circleId, percent) {
    const circle = document.getElementById(circleId);
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percent / 100) * circumference;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadWellnessData();
    
    // Animate progress bars
    setTimeout(() => {
        const circles = document.querySelectorAll('.progress-ring-circle');
        circles.forEach((circle, index) => {
            circle.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            circle.style.transitionDelay = (index * 0.2) + 's';
        });
    }, 100);
    
    // Show motivational message
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    console.log('%c' + randomMessage, 'color: #4A90E2; font-size: 14px; font-weight: bold;');
});

