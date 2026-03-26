// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Expose APIs to the renderer process
contextBridge.exposeInMainWorld('electron', {
    send: (channel, data) => {
        // whitelist channels
        ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
        // whitelist channels
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
});