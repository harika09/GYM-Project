// ===== Scroll Reveal Animation ==== //

//LEFT
const srleft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false
});


srleft.reveal(`.banner-text,
    .for-him`,{
    interval: 100
})


//RIGHT
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: false
});


srRight.reveal(`.for-her`,{
    interval: 100
})


//TOP
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 4000,
    reset: false
});


srtop.reveal(`.banner-info,
    .about-img,
    .btn-learn-more`,{
    interval: 100
})

//BOTTOM
const srbottom = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 4000,
    reset: false
});


srbottom.reveal(`.about-text`,{
    interval: 800
})