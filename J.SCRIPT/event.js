$(document).ready(function(){
    $(".list>li").click(function(){
        $(".list>.active").removeClass("active");
        $(this).addClass("active");
        let data;
        if($(this).attr("data-name") === 'all') {
            data=document.querySelectorAll(".item");
        } 
        else {
            data=document.querySelectorAll(`.item[data-name="${$(this).attr('data-name')}"]`)
        }
        $(".item").css({
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: 'scale(0.2)',
            opacity: '0'
        });
        setTimeout(() => {
            $(".item").css({
                display: 'none'
            });
            $(data).css({
                display: 'block'
            });
        }, 200);
        setTimeout(() => {
            $(data).css({
                transform: 'scale(1)',
                opacity: '1'
            });
        }, 210);

    })
})