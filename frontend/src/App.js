import React from 'react';
import localStorageService from './localStorageService';

const App = () => {
    // Example usage of localStorageService
    const handleSave = () => {
        localStorageService.setItem('key', 'value');
    };

    const handleLoad = () => {
        const value = localStorageService.getItem('key');
        console.log(value);
    };

    return (
        <div>
            <h1>Liquid Crystal Taskbar</h1>
            <button onClick={handleSave}>Save to Local Storage</button>
            <button onClick={handleLoad}>Load from Local Storage</button>
        </div>
    );
};

export default App;