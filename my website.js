
const typed =new Typed('.auto',{
    strings:['Web Developer','Logo Designer','Tiktoker'],
    typeSpeed:150,
    backSpeed:150,
    looped:true
    
    });


gsap.from('.des',{
    x:'100',
    duration:3,
    opacity:0,
    delay:18
})
gsap.from('.focus',{
    x:'-100',
    duration:3,
    opacity:0,
    delay:24,
    
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function  hideSidebar() {
const sidebar = document.querySelector('.sidebar');
sidebar.style.display = 'none';

    
}
