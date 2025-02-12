


function goToReg(){
    location.href = '../html/formularios/registro.html';
}

function goToLog(){
    location.href = '../html/formularios/login.html';
}

const menuIcon = document.querySelector('.menu-ic-des');
const menuList = document.querySelector('.menu-list');
menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('show');
    });