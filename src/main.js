const { BrowserWindow, app } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {},
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, "/../build/index.html"),
    protocol: "file:",
    slashes: true,
  });
  // win.loadURL("http://localhost:3000");
  // win.loadURL(startUrl);
  // console.log(path.join(__dirname, "../build/index.html"));
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
}

app.on("ready", createWindow);
