import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Splash Screen logic
const splashScreen = document.getElementById('splash-screen');
if (splashScreen) {
  setTimeout(() => {
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 700); // Match duration of opacity transition
  }, 1500); // Show splash for 1.5 seconds
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);