const fixBtn = document.getElementById('fix-button');
const settingIcon = document.getElementById('setting-icon');
const colorBox = document.getElementById('color-box');
const showSide = document.getElementById('show-side');
const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close-menu')
const body = document.body
const nav = document.getElementById('nav')
const footerBottom = document.getElementById('footer')
const headFooter = document.getElementById('footer-h5 h5')
const boxes = document.getElementById('txt-column')
const button = document.getElementById('button')
const btnList = document.getElementById('btn-list')
const navMobile = document.getElementById('nav-mobile');
const moonSmall = document.getElementById('moon-small');
const moonItem = document.getElementById('moon-item')
const sun = document.getElementById('sun')
const colorOne = document.getElementById('color-one');
const buttons = document.getElementsByTagName('button')







//click on button go to up page
function clickUp() {
    window.scrollTo(0, 0)

}

//click on button open the color box

function settingToggle() {
    colorBox.classList.toggle('show-me');
    settingIcon.classList.toggle('active');
}


//show SIDE CONENT

function createSide() {
    menu.classList.add('show')
}

//hide SIDE CONTENT

function hideSide() {
    menu.classList.remove('show');
    navMobile.classList.remove('move');
    moonSmall.style.display = "block"
}

//create dark mode

function changeMode() {
    if (moonItem.classList.contains('not-active') === true) {
        body.setAttribute('theme', 'light');
        moonItem.classList.remove('not-active');
        sun.classList.add('not-active');
    } else {
        body.setAttribute('theme', 'dark');
        moonItem.classList.add('not-active');
        sun.classList.remove('not-active');
    }
}


//create theme light in body

function createThemeLight() {
    body.setAttribute('theme', 'light')
}

//open menu when click on button list

function openMenu() {
    navMobile.classList.add('move');
    moonSmall.style.display = "none";
}

// function changeMode() {
// }