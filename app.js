document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault;
    let i;
    for (i=1; i<=4; i++){
        let btn = "btn_"+i;
        let ul = "ul_"+i;
        document.getElementById(btn).addEventListener("click", ()=>{
            var x = document.getElementById(ul);
            if (getComputedStyle(x).display == "none") {
                x.style.display = "block";
                document.getElementById(btn).style.transform="none";
            } 
            else {
            x.style.display = "none";
            document.getElementById(btn).style.transform="rotate(-90deg)";
            }
        });

    }
    const items = document.querySelectorAll('section.news');
    const nbSlide = items.length;
    const suivant = document.querySelector('.right');
    const precedent = document.querySelector('.left');
    let count = 0;

    function slideSuivante(){
        items[count].classList.remove('active');

        if(count < nbSlide - 1){
            count++;
        } else {
            count = 0;
        }

        items[count].classList.add('active')
        console.log(count);
        
    }
    suivant.addEventListener('click', slideSuivante)


    function slidePrecedente(){
        items[count].classList.remove('active');

        if(count > 0){
            count--;
        } else {
            count = nbSlide - 1;
        }

        items[count].classList.add('active')
        // console.log(count);
        
    }
    precedent.addEventListener('click', slidePrecedente)

  });