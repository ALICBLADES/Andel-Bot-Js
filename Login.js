const {app, ipcMain, BrowserWindow, contextBridge} = require('electron');
const path = require("path");

//A function that creates the login window with all of it's makeup
 function createloginwindow(){

  //Creating the login window
  const login_window = () => { //START LOGIN_WINDOW

    //Initializing the login browserWindow
    const new_win = new BrowserWindow({
       //Setting the height of the window
       height: 600,

       //Setting the width of the window
       width: 800,

       //Setting the frame of the window to be true
       frame: true,

       //Settings of the online preferences
       webPreferences:

       { //START WEBPREFERENCES

        //Setting the node intergation to false
        nodeIntegration: false,

        //Setting the context Isolation to true
        contextIsolation: true

        } //END WEBPREFERENCES

    }); //END BROWSERWINDOW

} //END CREATEWINDOW

    //Loading the js file to the the html file
    new_win.loadFile('Login_Window.html')

} //CREATELOGINWINDOW

function User_info(){ //START USER_INFO

     window.addEventListener("load", function(){ //START WINDOWLISTENER

     const username = document.getElementById("Username");

     const password = document.getElementById("Password");

     const submit = document.getElementById("submitButton");

     const messageContainer = document.getElementById("Login")

    }); //END WINDOWLISTENER

  } //END USER_INFO

// Making the createwindow function available to all
// js files, so they can be exported from this modules
module.exports = { //START MODULE
    createloginwindow, User_info
} //END MODULES
