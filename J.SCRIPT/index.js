$(document).ready(function(){
    //menu trong suốt
    $(window).scroll(function() {
        if($(window).scrollTop() > 10){
            $("header").css({background:'white'});
            $(".menu a, header a").css({color:'black'});
        } else {
            $("header").css({background: 'transparent'});
            $(".menu a, header a").css({color:'white'});
        }
    });

    //anh slide

    let images=document.querySelector('.images');
    let i=0;
    function slide() {
        let w=document.body.scrollWidth;
        i++;
        if(i===5)
            i=0;
        images.style.transform=`translateX(${-w*i}px)`;
        document.querySelector(".activeDot").classList.remove("activeDot");
        document.getElementById(`dot_${i}`).classList.add("activeDot");
    }

    let run=setInterval(slide,4000);

    let next=document.querySelector(".next");
    let pre=document.querySelector(".pre");
    next.onclick=function(){
        clearInterval(run);
        slide();
        run=setInterval(slide,4000);
    }
    pre.onclick=function(){
        clearInterval(run);
        let w=document.body.scrollWidth;
        i--;
        if(i===-1)
            i=4;
        images.style.transform=`translateX(${-w*i}px)`;
        document.querySelector(".activeDot").classList.remove("activeDot");
        document.getElementById(`dot_${i}`).classList.add("activeDot");
        run=setInterval(slide,4000);
    }

    $(".dots>div").click(function(){
        let a=this.id;
        a=a.substr(-1,1);
        i=parseInt(a)-1;
        console.log(i);
        slide();
        clearInterval(run);
        run=setInterval(slide,4000);
    })
    
});
