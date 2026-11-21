// template_znhcash
// service_a5f68pd
// 

function contact(event) {
    event.preventDefault();
     emailjs.sendform(
        'service_a5f68pd',
        'template_znhcash',
        event.target,
        'fQwUmUy6gRH2krvIQ'
     ).then(() => {
        console.log('this worked1')
     })

}
 
console.log('javascript file loaded!')