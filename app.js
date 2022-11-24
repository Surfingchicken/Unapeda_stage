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

  });