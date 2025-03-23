$(document).ready(function(){
    $("#tk").on('keyup', function() {
        let keyword = $(this).val().toLowerCase();
        let found=false;
        if(keyword!==""){
            $(".books>h2").hide();
        }
        else{
            $(".books>h2").show();
        }
        $(".book>div").each(function() {
            let itemText = $(this).text().toLowerCase();

            if(itemText.includes(keyword)) {
              $(this).parent().show();
              found=true;
            } else {
              $(this).parent().hide();
            }
        });
        if (found) {
            $(".no").css({
                display: 'none'
            });
          } else {
            $(".no").css({
                display: 'flex'
            });
          }
    })
})