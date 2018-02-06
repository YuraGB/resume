export const animationMainBlock = (()=>{
    document.body.addEventListener('click', (e) => {
        if(e.target.getAttribute('data-block')) {
            animPages(document.querySelectorAll('.tab'), e.target);
        }

});})
();



function animPages(collection, target) {
    for(let elem of collection){
        if ( !elem.classList.contains(target.getAttribute('data-block')) && !!parseInt(getComputedStyle(elem).opacity) ){
            elem.animate(
                {
                    right: ["0%", "-5%", '-45rem'],
                    opacity: [1, 0, 0],
                    transform: ["scale(1)", "scale(0.9)", "scale(0.8)"]
                },
                 {
                    duration: 100,
                    easing: "cubic-bezier(.99,.4,.52,1)"
                  });
                elem.style.display = 'none';
                elem.style.right = "-45rem";
        }
        if( elem.classList.contains(target.getAttribute('data-block')) &&  getComputedStyle(elem).display === "none") {
            elem.style.display = "block";
           
                elem.animate(
                    {
                        right: ['-45%', '-10%', '0%'],
                        opacity: [0, 0, 1],
                        transform: ["scale(0.99)", "scale(0.9)", "scale(1)"]
                    }
                    , {
                        duration: 500,
                        easing: "cubic-bezier(0,1.01,.17,.97)"
                    });
                elem.style.overflow = "auto";
                elem.style.right = "0%";


        }}}