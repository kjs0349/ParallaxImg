const imgs = document.querySelectorAll('.img');

console.log(imgs[4].offsetTop);

window.addEventListener('scroll', function() {
    const pageYOffset = window.pageYOffset;
    console.log(parseInt(pageYOffset) );
    for(let i = 0; i < imgs.length; i++) {
        if(imgs[i].offsetTop - parseInt(pageYOffset) <= (window.innerHeight)/2) {
            imgs[i].classList.add('show');
        }else {
            imgs[i].classList.remove('show');
        }
    }
    
});