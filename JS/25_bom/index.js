
const infoBox = document.getElementById('infoBox');

// 1. Window Size
function showWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    infoBox.innerHTML = `Window Size: Width = ${width}, Height = ${height}`;
}

// 2. Location Information
function showLocation() {
    infoBox.innerHTML = `Current URL: ${location.href}<br>
                         Protocol: ${location.protocol}<br>
                         Hostname: ${location.hostname}`;
}

// 3. Redirect to Another Page
function redirectPage() {
    location.href = "https://www.google.com";
}

// 4. Navigator Information
function showNavigatorInfo() {
    infoBox.innerHTML = `Browser Name: ${navigator.appName}<br>
                         Browser Version: ${navigator.appVersion}<br>
                         Platform: ${navigator.platform}`;
}

// 5. Go Back in History
function goBack() {
    history.back();
}

// 6. Screen Information
function showScreenInfo() {
    infoBox.innerHTML = `Screen Width: ${screen.width}, Screen Height: ${screen.height}<br>
                         Available Width: ${screen.availWidth}, Available Height: ${screen.availHeight}`;
}
