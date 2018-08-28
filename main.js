const { app, BrowserWindow, Menu } = require('electron');

const template = [
  {
    label: 'Application',
    submenu: [
      { label: 'About Application', selector: 'orderFrontStandardAboutPanel:' },
      { type: 'separator' },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: () => app.quit(),
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
      { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
      { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        selector: 'selectAll:',
      },
    ],
  },
];

function createWindow() {
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  win = new BrowserWindow({ width: 1024, height: 600 });

  win.loadFile('index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());
