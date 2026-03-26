// localStorageService.js

/**
 * Local Storage Service for managing apps and settings.
 */

const LocalStorageService = {
    // Save data to localStorage
    save(key, value) {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error('Error saving data to localStorage', error);
        }
    },

    // Get data from localStorage
    get(key) {
        try {
            const serializedValue = localStorage.getItem(key);
            return serializedValue === null ? undefined : JSON.parse(serializedValue);
        } catch (error) {
            console.error('Error getting data from localStorage', error);
            return undefined;
        }
    },

    // Remove data from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing data from localStorage', error);
        }
    },

    // Clear all localStorage
    clear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing localStorage', error);
        }
    }
};

export default LocalStorageService;