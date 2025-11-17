// Insights & Summary Page

const downloadBtn = document.getElementById('downloadBtn');
const resetBtn = document.getElementById('resetBtn');
const resetModal = document.getElementById('resetModal');
const closeResetModal = document.getElementById('closeResetModal');
const cancelResetBtn = document.getElementById('cancelResetBtn');
const confirmResetBtn = document.getElementById('confirmResetBtn');

// Load weekly data
function loadWeeklyData() {
    const activities = weeklyData.activities;
    const calories = weeklyData.calories;
    
    displayBarChart('weeklyActivities', activities, 'activities');
    displayBarChart('weeklyCalories', calories, 'cal');
    
    updateSummaryStats();
}

function displayBarChart(chartId, data, unit) {
    const chartContainer = document.querySelector(`#${chartId} .chart-bars`);
    chartContainer.innerHTML = '';
    
    const maxValue = Math.max(...data);
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    data.forEach((value, index) => {
        const height = (value / maxValue) * 100;
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = `${height}%`;
        bar.setAttribute('data-value', value);
        
        const valueLabel = document.createElement('div');
        valueLabel.className = 'chart-bar-value';
        valueLabel.textContent = unit === 'activities' ? value : value.toLocaleString();
        bar.appendChild(valueLabel);
        
        // Add subtle gradient variation per bar
        const gradientOffset = (index / data.length) * 100;
        bar.style.background = `linear-gradient(180deg, 
            ${index % 3 === 0 ? '#4A90E2' : index % 3 === 1 ? '#357ABD' : '#2E5C8A'} 0%, 
            ${index % 3 === 0 ? '#357ABD' : index % 3 === 1 ? '#2E5C8A' : '#1E4A7F'} 100%)`;
        
        chartContainer.appendChild(bar);
    });
}

function updateSummaryStats() {
    const activities = weeklyData.activities;
    const calories = weeklyData.calories;
    
    const totalActivities = activities.reduce((sum, val) => sum + val, 0);
    const totalCaloriesBurned = calories.reduce((sum, val) => sum + val, 0);
    
    // Calculate average steps (simulated from wellness data)
    const wellnessData = JSON.parse(localStorage.getItem('wellnessData')) || {};
    const avgSteps = wellnessData.steps || 7500;
    
    // Find most active day
    const maxActivities = Math.max(...activities);
    const mostActiveIndex = activities.indexOf(maxActivities);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    document.getElementById('totalActivities').textContent = totalActivities;
    document.getElementById('totalCaloriesBurned').textContent = totalCaloriesBurned.toLocaleString();
    document.getElementById('avgSteps').textContent = avgSteps.toLocaleString();
    document.getElementById('mostActiveDay').textContent = days[mostActiveIndex];
}

// Download Summary (simulated)
downloadBtn.addEventListener('click', () => {
    const summary = {
        totalActivities: document.getElementById('totalActivities').textContent,
        totalCaloriesBurned: document.getElementById('totalCaloriesBurned').textContent,
        avgSteps: document.getElementById('avgSteps').textContent,
        mostActiveDay: document.getElementById('mostActiveDay').textContent,
        weeklyActivities: weeklyData.activities,
        weeklyCalories: weeklyData.calories
    };
    
    // Create a text file content
    const content = `FitTrack Pro - Weekly Summary
Generated: ${new Date().toLocaleString()}

Total Activities This Week: ${summary.totalActivities}
Total Calories Burned: ${summary.totalCaloriesBurned}
Average Daily Steps: ${summary.avgSteps}
Most Active Day: ${summary.mostActiveDay}

Weekly Activities Breakdown:
Monday: ${summary.weeklyActivities[0]}
Tuesday: ${summary.weeklyActivities[1]}
Wednesday: ${summary.weeklyActivities[2]}
Thursday: ${summary.weeklyActivities[3]}
Friday: ${summary.weeklyActivities[4]}
Saturday: ${summary.weeklyActivities[5]}
Sunday: ${summary.weeklyActivities[6]}

Weekly Calories Breakdown:
Monday: ${summary.weeklyCalories[0]}
Tuesday: ${summary.weeklyCalories[1]}
Wednesday: ${summary.weeklyCalories[2]}
Thursday: ${summary.weeklyCalories[3]}
Friday: ${summary.weeklyCalories[4]}
Saturday: ${summary.weeklyCalories[5]}
Sunday: ${summary.weeklyCalories[6]}
`;
    
    // Create download link
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fittrack-summary-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show feedback
    const originalText = downloadBtn.textContent;
    downloadBtn.textContent = 'Downloaded!';
    downloadBtn.style.background = 'var(--secondary-color)';
    setTimeout(() => {
        downloadBtn.textContent = originalText;
        downloadBtn.style.background = '';
    }, 2000);
});

// Reset Dashboard
resetBtn.addEventListener('click', () => {
    resetModal.classList.add('active');
});

closeResetModal.addEventListener('click', () => {
    resetModal.classList.remove('active');
});

cancelResetBtn.addEventListener('click', () => {
    resetModal.classList.remove('active');
});

confirmResetBtn.addEventListener('click', () => {
    // Clear localStorage
    localStorage.removeItem('activities');
    localStorage.removeItem('meals');
    localStorage.removeItem('wellnessData');
    
    // Reset to initial values
    localStorage.setItem('activities', JSON.stringify(initialActivities));
    localStorage.setItem('meals', JSON.stringify(initialMeals));
    localStorage.setItem('wellnessData', JSON.stringify(wellnessData));
    
    resetModal.classList.remove('active');
    
    // Show feedback
    const originalText = resetBtn.textContent;
    resetBtn.textContent = 'Reset Complete!';
    resetBtn.style.background = 'var(--secondary-color)';
    setTimeout(() => {
        resetBtn.textContent = originalText;
        resetBtn.style.background = '';
        // Reload page to show reset data
        window.location.reload();
    }, 1500);
});

resetModal.addEventListener('click', (e) => {
    if (e.target === resetModal) {
        resetModal.classList.remove('active');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadWeeklyData();
});

