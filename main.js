const closeSidenav = document.querySelector('#close-sidenav')
const openSidenav = document.querySelector('#open-sidenav')
const sidenav = document.querySelector('#sidenav')
const overlay = document.querySelector('#overlay')
const openPortal = document.querySelector('#open-portal')
const portal = document.querySelector('#portal')

//#region sidenav
const SIDENAV_CLASS = ['active', 'in-active']

function replaceClass($htmlElement) {
    return () => {
        if($htmlElement.classList.contains(SIDENAV_CLASS[1])) {
            $htmlElement.classList.replace(SIDENAV_CLASS[1], SIDENAV_CLASS[0])
        } else if ($htmlElement.classList.contains(SIDENAV_CLASS[0])) {
            $htmlElement.classList.replace(SIDENAV_CLASS[0], SIDENAV_CLASS[1])
        } else {
            $htmlElement.classList.add(SIDENAV_CLASS[0])
        }
    }
}

closeSidenav.addEventListener('click', replaceClass(sidenav))

openSidenav.addEventListener('click', replaceClass(sidenav))
// #endregion

// #region portal
function togglePortal() {
    portal.classList.toggle('active')
    overlay.classList.toggle('active')
}

overlay.addEventListener('click', togglePortal)
openPortal.addEventListener('click', togglePortal)
// #endregion