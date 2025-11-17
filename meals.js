// Meal Planner Page

let meals = JSON.parse(localStorage.getItem('meals')) || initialMeals;
let mealIdCounter = Math.max(...Object.values(meals).flat().map(m => m.id), 0) + 1;

// DOM elements
const mealModal = document.getElementById('mealModal');
const mealForm = document.getElementById('mealForm');
const closeMealModal = document.getElementById('closeMealModal');
const cancelMealBtn = document.getElementById('cancelMealBtn');
const addMealBtns = document.querySelectorAll('[data-meal]');
const totalCaloriesEl = document.getElementById('totalCalories');

let currentMealType = 'breakfast';

// Load and display meals
function loadMeals() {
    meals = JSON.parse(localStorage.getItem('meals')) || initialMeals;
    displayMeals();
    updateTotalCalories();
}

function displayMeals() {
    ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
        const container = document.getElementById(`${mealType}Items`);
        container.innerHTML = '';
        
        if (meals[mealType] && meals[mealType].length > 0) {
            meals[mealType].forEach(meal => {
                const mealItem = document.createElement('div');
                mealItem.className = 'meal-item';
                mealItem.innerHTML = `
                    <div class="meal-item-info">
                        <div class="meal-item-name">${meal.name}</div>
                        <div class="meal-item-calories">${meal.calories} calories</div>
                    </div>
                    <button class="meal-item-remove" data-meal-type="${mealType}" data-meal-id="${meal.id}">Remove</button>
                `;
                container.appendChild(mealItem);
            });
        } else {
            container.innerHTML = '<div style="text-align: center; padding: 1rem; color: var(--text-light);">No meals added yet.</div>';
        }
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.meal-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const mealType = btn.dataset.mealType;
            const mealId = parseInt(btn.dataset.mealId);
            removeMeal(mealType, mealId);
        });
    });
}

function updateTotalCalories() {
    const total = Object.values(meals).flat().reduce((sum, meal) => sum + meal.calories, 0);
    totalCaloriesEl.textContent = total.toLocaleString();
}

function removeMeal(mealType, mealId) {
    meals[mealType] = meals[mealType].filter(m => m.id !== mealId);
    localStorage.setItem('meals', JSON.stringify(meals));
    displayMeals();
    updateTotalCalories();
}

// Modal functionality
addMealBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentMealType = btn.dataset.meal;
        mealModal.classList.add('active');
    });
});

closeMealModal.addEventListener('click', () => {
    mealModal.classList.remove('active');
    mealForm.reset();
});

cancelMealBtn.addEventListener('click', () => {
    mealModal.classList.remove('active');
    mealForm.reset();
});

mealModal.addEventListener('click', (e) => {
    if (e.target === mealModal) {
        mealModal.classList.remove('active');
        mealForm.reset();
    }
});

// Form submission
mealForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('mealName').value.trim();
    const calories = parseInt(document.getElementById('mealCalories').value);
    
    // Validation
    if (!name || name.length < 2) {
        alert('Meal name must be at least 2 characters long.');
        return;
    }
    
    if (calories < 1 || calories > 5000) {
        alert('Calories must be between 1 and 5000.');
        return;
    }
    
    // Add new meal
    if (!meals[currentMealType]) {
        meals[currentMealType] = [];
    }
    
    const newMeal = {
        id: mealIdCounter++,
        name: name,
        calories: calories
    };
    
    meals[currentMealType].push(newMeal);
    localStorage.setItem('meals', JSON.stringify(meals));
    
    // Close modal and update display
    mealModal.classList.remove('active');
    mealForm.reset();
    displayMeals();
    updateTotalCalories();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadMeals();
});

