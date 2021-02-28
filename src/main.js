const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 100,
    height: 45,
    frame: false,
    titleBarStyle: 'customButtonsOnHover',
    resizable: false,
    alwaysOnTop: true,
    minimizable: false,
    maximizable: false,
    movable: true,
  })

  mainWindow.loadURL(`File://${__dirname}/../public/index.html`)
}


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
