$(document).ready(function(){
    $(".sub").hide();
    $("#scrollToTop").hide();
    $(".subs").hover(function(){
        $(".sub").stop();
        $(".sub").slideDown(150);
    }, function(){
        $(".sub").stop();
        $(".sub").slideUp();
    });
    
    //Ẩn hiện menu
    let beforeTop = $(document).scrollTop();;
    $(document).scroll(function() {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > beforeTop && scrollTop>300) {
            $("header").slideUp(150);
        } else {
            $("header").slideDown(150);
        }
        beforeTop = scrollTop;

        //Ẩn hiện scrollTop
        if (scrollTop>300) {
            $("#scrollToTop").slideDown(150);
        } else {
            $("#scrollToTop").slideUp(150);
        }
    });

    //Copy SĐT
    $(".copy>li>button").click(function(){
        let sdt = this.previousElementSibling.innerText;
        navigator.clipboard.writeText(sdt);
        this.classList.add("active");
        let copy=this;
        setTimeout(function(){
            copy.classList.remove("active");
        },1000);
    })

    //Menu trong suốt
    $(window).scroll(function() {
        if($(window).scrollTop() > 10){
            $("header").css({background:'white'});
            $(".menu a, header>a").css({color:'black'});
        } else {
            $("header").css({background: 'white'});
            $(".menu a, header>a").css({color:'black'});
        }
    });

    //Mobile
    $("#bars>i").click(function(){
        $("ul.menu").slideToggle();
        $("#bars>i").toggleClass("fa-bars fa-xmark ");
    })

    //scrollTop
    $(document).ready(function() {
        $("#scrollToTop").on("click", function() {
            $("html, body").animate({ scrollTop: 0 }, "smooth");
        });
    });
})
