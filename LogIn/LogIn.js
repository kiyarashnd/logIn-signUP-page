const links = document.querySelectorAll('a');
for (let link of links) {
    if (link.innerHTML === 'Login')
        link.addEventListener('click', moveright);
    else
        link.addEventListener('click', moveleft);
}
// window.addEventListener('resize', () => {

//     let size = document.querySelector('main').offsetWidth;

//     if (window.innerWidth <= 855) {
//         console.log('het');
//         document.getElementById('login').style.transform = `translateX(-${window.innerWidth - (size / 1.5)}px)`
//         document.getElementById('register').style.transform = `translateX(-${window.innerWidth - (size / 1.5)}px)`
//     }
// })

// window.addEventListener('resize', () => location.reload());

function moveright() {
    let size = document.querySelector('main').offsetWidth;

    const forms = document.querySelectorAll('form');
    for (let form of forms) {
        form.style.transform = 'translateX(-100%)';
    }
    document.querySelector('[alt="work-icon"]').style.transform = 'translateX(-180%)';
    if (window.innerWidth <= 855) {
        document.getElementById('login').style.transform = `translateX(-${window.innerWidth - (size / 2.2)}px)`
        document.getElementById('register').style.transform = `translateX(-${window.innerWidth - (size / 2.2)}px)`
    }
}
function moveleft() {
    const forms = document.querySelectorAll('form');
    for (let form of forms) {
        form.removeAttribute("style");
    }
    document.querySelector('[alt="work-icon"]').removeAttribute("style");
}