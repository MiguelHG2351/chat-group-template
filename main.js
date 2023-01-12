const closeSidenav = document.querySelector('#close-sidenav')
const openSidenav = document.querySelector('#open-sidenav')
const sidenav = document.querySelector('#sidenav')

const SIDENAV_CLASS = ['active', 'in-active']

function replaceClass() {
    if(sidenav.classList.contains(SIDENAV_CLASS[1])) {
        sidenav.classList.replace(SIDENAV_CLASS[1], SIDENAV_CLASS[0])
    } else if (sidenav.classList.contains(SIDENAV_CLASS[0])) {
        sidenav.classList.replace(SIDENAV_CLASS[0], SIDENAV_CLASS[1])
    } else {
        sidenav.classList.add(SIDENAV_CLASS[0])
    }
}

closeSidenav.addEventListener('click', replaceClass)

openSidenav.addEventListener('click', replaceClass)