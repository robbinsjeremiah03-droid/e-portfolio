// template_znhcash
// service_a5f68pd
// 

function contact(event) {
    event.preventDefault();
    // emailjs.sendForm(
    //     'template_znhcash',
    //     'service_a5f68pd',
    //     event.target,
    //     'fQwUmUy6gRH2krvIQ'
    // ) .then(()=> {
    //     console.log('this worked1')
    // })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('modal__overlay--success')
    loading.classlist += " modal__overlay--visible"
    setTimeout(() => {
        loading.classlist.remove('modal__overlay--visible');
        success.classlist += "modal__overlay--visible";
        console.log('it worked1')
    }, 500);
}
 
console.log('javascript file loaded!')