// spinnering wrapper loading

const spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapper.style.opacity = '0';

})

setTimeout(() => {
    spinnerWrapper.style.display = 'none';
}, 200)


// my toast triggering
const myToast = new bootstrap.Toast('toast')

setTimeout(() =>{
    myToast.show();
}, 1000)
