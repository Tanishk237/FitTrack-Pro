// Static data for FitTrack Pro
const wellnessData = {
    steps: 7500,
    caloriesBurned: 1650,
    waterIntake: 6,
    goalProgress: 75,
    activeMinutes: 45,
    heartRate: 62
};

const initialActivities = [
    { id: 1, name: 'Morning Run', duration: 30, calories: 350, time: 'morning' },
    { id: 2, name: 'Yoga Session', duration: 45, calories: 200, time: 'morning' },
    { id: 3, name: 'Cycling', duration: 60, calories: 500, time: 'afternoon' },
    { id: 4, name: 'Evening Walk', duration: 20, calories: 100, time: 'evening' },
    { id: 5, name: 'Strength Training', duration: 40, calories: 400, time: 'afternoon' },
    { id: 6, name: 'Swimming', duration: 45, calories: 450, time: 'morning' },
    { id: 7, name: 'HIIT Workout', duration: 30, calories: 380, time: 'afternoon' },
    { id: 8, name: 'Pilates', duration: 35, calories: 250, time: 'evening' }
];

const initialMeals = {
    breakfast: [
        { id: 1, name: 'Oatmeal with Berries', calories: 350 },
        { id: 2, name: 'Greek Yogurt & Granola', calories: 150 },
        { id: 3, name: 'Avocado Toast', calories: 280 }
    ],
    lunch: [
        { id: 4, name: 'Grilled Chicken Salad', calories: 450 },
        { id: 5, name: 'Quinoa Bowl', calories: 380 },
        { id: 6, name: 'Turkey Sandwich', calories: 420 }
    ],
    dinner: [
        { id: 7, name: 'Salmon with Vegetables', calories: 520 },
        { id: 8, name: 'Brown Rice & Tofu', calories: 400 },
        { id: 9, name: 'Lean Beef Stir-fry', calories: 480 }
    ]
};

const weeklyData = {
    activities: [5, 7, 4, 6, 8, 5, 6],
    calories: [1650, 1800, 1500, 1950, 2100, 1750, 1900]
};

// Initialize localStorage if not exists
if (!localStorage.getItem('activities')) {
    localStorage.setItem('activities', JSON.stringify(initialActivities));
}

if (!localStorage.getItem('meals')) {
    localStorage.setItem('meals', JSON.stringify(initialMeals));
}

if (!localStorage.getItem('wellnessData')) {
    localStorage.setItem('wellnessData', JSON.stringify(wellnessData));
}

