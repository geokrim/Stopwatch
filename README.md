# Stopwatch

A stopwatch that runs in the browser: start, stop, reset, and record laps. Built as a practice project to work with timing and real-time UI updates in plain JavaScript.

## What it does

- Start, stop, and reset the timer
- Record laps, with a dedicated lap counter
- Clear the recorded laps without stopping the timer
- Formatted time display (HH:MM:SS)

## How it works

- Uses `setInterval` for timing
- Tracks hours, minutes, seconds, and the active interval so timers don't overlap
- Updates the display in real time and builds the lap list dynamically in the DOM
- Laid out and styled with CSS Flexbox

## Built with

- HTML, CSS, and JavaScript (no libraries)

## Running it

Open `index.html` in any browser. There is no build step and there are no dependencies.

## Files

- `index.html` — page markup
- `script.js` — the timer and lap logic
- `style.css` — styling# Stopwatch
A functional stopwatch application built with JavaScript, HTML, and CSS.

## Features
- Start, Stop, and Reset functionality.
- Lap recording with a dedicated lap counter.
- Clear Laps feature to reset lap data without stopping the timer.
- Formatted time display (HH:MM:SS) using string padding.
- Responsive design with color-coded controls.

## Technical Details
- Built using asynchronous setInterval for accurate timing.
- State management for hours, minutes, seconds, and active intervals to prevent overlapping timers.
- DOM manipulation for real-time UI updates and dynamic list creation for laps.
- CSS Flexbox for layout and styling.
