function onMenuClick() {
    let menuicon = document.getElementById("menu-icon");
    let menu = document.getElementById("menu");
    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
        menuicon.src = "src/imgs/close-icon.png";
    } else {
        menu.style.display = 'none';
        menuicon.src = "src/imgs/menu-icon.png";
    }
}

function toggleAns(toggle) {
    if (toggle.innerHTML == '+') { // to open
        toggle.innerHTML = '--';
        toggle.parentElement.style.borderRadius = '30px 30px 0 0'
        toggle.parentElement.nextElementSibling.style.display = 'block';
    } else {
        toggle.innerHTML = '+';
        toggle.parentElement.style.borderRadius = '30px'
        toggle.parentElement.nextElementSibling.style.display = 'none';
    }
}