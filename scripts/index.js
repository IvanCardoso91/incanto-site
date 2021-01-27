const dropDown = document.getElementById('dropdown-mobile')

function openDropDownMobile() {
    if (dropDown.style.display == 'none') {
        dropDown.style.display = 'block'
    } else {
        dropDown.style.display = 'none'
    }
}