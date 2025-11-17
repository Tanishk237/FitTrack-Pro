# FitTrack Pro

A modern, professional fitness tracking application built with vanilla JavaScript, HTML, and CSS. Track your daily wellness metrics, log activities, plan meals, and gain insights into your fitness journey with beautiful, interactive dashboards.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies](#technologies)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Features

### 📊 Daily Wellness Overview
- **Circular Progress Indicators** for steps, calories, and water intake
- **Live Clock** displaying current time in real-time
- **Quick Stats Dashboard** showing daily goals, active minutes, and heart rate
- **Animated Metrics** with smooth count-up animations

### 🏃 Activity Log
- **Activity Tracking** with duration and calories burned
- **Time-based Filtering** (Morning, Afternoon, Evening)
- **Add Custom Activities** with form validation
- **Interactive Cards** with smooth animations and hover effects

### 🍽️ Meal Planner
- **Meal Organization** by meal type (Breakfast, Lunch, Dinner)
- **Daily Calorie Tracking** with visual progress bar
- **Add/Remove Meals** easily with modal interface
- **Real-time Total Calories** calculation

### 📈 Insights & Analytics
- **Weekly Activity Charts** showing activities per day
- **Weekly Calories Chart** tracking calorie burn trends
- **Summary Statistics** including total activities and most active day
- **Achievement Section** displaying weekly milestones
- **Download Summary** feature to export weekly reports
- **Reset Dashboard** functionality to clear all data

### ✨ UI/UX Enhancements
- **Smooth Animations** throughout the application
- **Staggered Loading Effects** for visual appeal
- **Hover State Feedback** on all interactive elements
- **Professional Color Scheme** with gradient accents
- **Responsive Design** optimized for all devices
- **Glassmorphism Effects** in navigation and elements

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required
- Local storage support for data persistence

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/fittrack-pro.git
   cd fittrack-pro
   ```

2. **Open the application**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` in your browser

## Project Structure

```
fittrack-pro/
├── index.html           # Main overview page
├── activity.html        # Activity log page
├── meals.html          # Meal planner page
├── insights.html       # Analytics and insights page
├── styles.css          # Global styles and animations
├── script.js           # Overview page logic
├── activity.js         # Activity tracking logic
├── meals.js            # Meal planning logic
├── insights.js         # Analytics logic
├── data.js             # Static data and localStorage management
└── README.md           # Documentation
```

## Usage

### Daily Wellness Tracking
1. Open `index.html` to view your daily wellness overview
2. Check progress rings for steps, calories, and water intake
3. View quick statistics and today's goal progress

### Logging Activities
1. Navigate to "Activity Log" page
2. Click "+ Add Activity" button
3. Fill in activity details (name, duration, calories, time)
4. Submit to add to your activity list
5. Use filters to organize activities by time of day

### Planning Meals
1. Go to "Meal Planner" page
2. Click "+ Add Meal" under each meal category
3. Enter meal name and calorie count
4. Track your daily calorie total in real-time
5. Remove meals by clicking the "Remove" button

### Viewing Insights
1. Click "Insights" in the navigation
2. View weekly activity and calorie charts
3. Check summary statistics
4. See achievement milestones
5. Download weekly summary or reset dashboard

## Technologies

### Frontend Stack
- **HTML5** - Semantic structure and elements
- **CSS3** - Styling with gradients, animations, and responsive design
- **Vanilla JavaScript** - DOM manipulation and interactivity without dependencies

### Features & APIs
- **Local Storage** - Client-side data persistence
- **SVG Graphics** - Circular progress indicators
- **CSS Animations** - Professional transitions and effects
- **CSS Grid/Flexbox** - Responsive layouts
- **Backdrop Filter** - Modern glassmorphism effects

## Animations & Interactions

The application includes professional animations:
- **Fade-in animations** with staggered delays
- **Smooth hover states** on interactive elements
- **Count-up effects** for numeric displays
- **Bar growth animations** for charts
- **Scale and transform** effects for depth
- **Backdrop blur** effects for modals
- **Button ripple effects** on interaction

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari  | ✅ Latest 2 versions |
| Edge    | ✅ Latest 2 versions |

## Local Storage Data Structure

```javascript
// Activities stored in localStorage
{
  id: number,
  name: string,
  duration: number (minutes),
  calories: number,
  time: string ('morning' | 'afternoon' | 'evening')
}

// Meals stored in localStorage
{
  breakfast: [{ id, name, calories }],
  lunch: [{ id, name, calories }],
  dinner: [{ id, name, calories }]
}

// Wellness data stored in localStorage
{
  steps: number,
  caloriesBurned: number,
  waterIntake: number,
  goalProgress: number,
  activeMinutes: number,
  heartRate: number
}
```

## Key Features Explained

### Circular Progress Indicators
- Visual representation of progress towards daily goals
- Smooth SVG-based animations
- Real-time updates as metrics change

### Activity Filtering
- Filter activities by time of day
- Multiple filter states with visual feedback
- Preserves user's filter preference

### Meal Categorization
- Organized by meal type (breakfast, lunch, dinner)
- Real-time calorie total calculation
- Easy add/remove functionality

### Data Persistence
- All data stored in browser's localStorage
- Persists across browser sessions
- Can be reset from the Insights page

## Customization Guide

### Modify Daily Goals
Edit `data.js`:
```javascript
const wellnessData = {
  steps: 10000,         // Change daily step goal
  caloriesBurned: 2000, // Change calorie goal
  waterIntake: 8,       // Change water intake goal
};
```

### Change Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-color: #4A90E2;
  --secondary-color: #50C878;
  --danger-color: #E74C3C;
  --text-dark: #1A1A1A;
  --text-light: #6B7280;
  /* More colors available */
}
```

### Add Sample Data
Expand the arrays in `data.js`:
```javascript
const initialActivities = [
  { id: 1, name: 'Your Activity', duration: 30, calories: 300, time: 'morning' },
  // Add more...
];
```

## Performance Characteristics

- **Lightweight**: No external dependencies or frameworks
- **Fast Loading**: Optimized CSS and minimal JavaScript (~50KB total)
- **Smooth Animations**: GPU-accelerated transforms
- **Efficient Storage**: Minimal localStorage usage
- **Responsive**: Works seamlessly on all screen sizes

## Troubleshooting

### Data Not Persisting
- Enable localStorage in browser settings
- Check privacy/incognito mode (doesn't support storage)
- Clear browser cache and reload

### Animations Not Smooth
- Update browser to latest version
- Disable browser extensions that might block transitions
- Check hardware acceleration in browser settings

### Charts Not Displaying
- Ensure JavaScript is enabled
- Check browser developer console for errors
- Verify SVG support in your browser

## Future Enhancements

- [ ] Backend API for cloud synchronization
- [ ] User authentication and accounts
- [ ] Pre-built workout routines
- [ ] Nutrition database integration
- [ ] Social sharing features
- [ ] Mobile app version (React Native)
- [ ] AI-powered fitness recommendations
- [ ] Integration with fitness wearables
- [ ] Dark mode theme
- [ ] Multi-language support

## Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## Support & Feedback

- **Report Issues**: Open an issue on GitHub
- **Feature Requests**: Discuss in issues section
- **Questions**: Check existing documentation first

## Changelog

### Version 1.0.0 (Current)
- Initial release
- Core features: Overview, Activity Log, Meal Planner, Insights
- Professional animations and UI/UX enhancements
- Responsive design for all devices
- LocalStorage data persistence

---

**Made with ❤️ for fitness enthusiasts**

For questions or support, please open an issue on GitHub.

