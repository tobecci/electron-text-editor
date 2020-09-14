const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', ()=>{
    console.log("app is ready")
    let win = new BrowserWindow({})
    win.loadFile('index.html')
})