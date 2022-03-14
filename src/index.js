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