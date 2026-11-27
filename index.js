let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientx * scaleFactor;
    const y = event.clienty * scaleFactor;

    for (let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].Style.transform = 'translate(${x * boolInt}px, ${y * boolInt}px)'
    }
}

function togglecontrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classlist += "dark-theme"
    }
    else{
       document.body.classlist.remove('dark-theme')
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
      .sendForm(
        'template_znhcash',
        'service_a5f68pd',
        event.target,
        'fQwUmUy6gRH2krvIQ'
    ) .then(()=> {
        loading.classList.remove('modal__overlay--visible')
        success.classList += "modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert(
        "the email is temporaliy unavalible. please contact me directly on robbins.jeremiah03@gmail.com "
    );
    })   
}

function toggleModal() {
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classlist.remove('modal--open')
    }
    isModalOpen = true;
    document.body.classlist += "modal--open"
}