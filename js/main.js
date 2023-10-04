function togglePower(){
    var powerOffScreen=document.getElementById('power-off');
    var blinkingLight=document.getElementById('blinking-light');
    if(powerOffScreen.style.display=='none'){
        powerOffScreen.style.display='block';
        powerOffScreen.style.animationName='fadeIn';
        blinkingLight.style.animationPlayState='paused';
    }
    else{
        setTimeout(()=>{powerOffScreen.style.display='none';},800);
        powerOffScreen.style.animationName='fadeOut';
        blinkingLight.style.animationPlayState='running';
    }
}

function showReadmeWindow(){
    var readmeWindow=document.getElementById('readme-window');
    readmeWindow.style.display='block';
}
function closeReadmeWindow(){
    var readmeWindow=document.getElementById('readme-window');
    readmeWindow.style.display='none'; 
}
function showTerminalWindow(){
    var terminalWindow=document.getElementById('terminal-window');
    terminalWindow.style.display='block';
}
function closeTerminalWindow(){
    var terminalWindow=document.getElementById('terminal-window');
    terminalWindow.style.display='none'; 
}

function showWallpaperWindow(){
    var wallpaperWindow=document.getElementById('wallpaper-window');
    wallpaperWindow.style.display='block';
}
function closeWallpaperWindow(){
    var wallpaperWindow=document.getElementById('wallpaper-window');
        wallpaperWindow.style.display='none'; 
}


function changeWallpaper(e){
    var image=e.src;
    var screen=document.getElementById('screen');
    screen.style.backgroundImage="url("+image+")";
}