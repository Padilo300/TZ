$(document).ready(function () {

    
    /////////////////////////////////////////////////////////
    /////                                               /////
    ///// Запуск счетчика цифр при скролле              /////   
    /////                                               /////
    /////////////////////////////////////////////////////////
    
   /*  var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function () {
        if (!show) return false;                      // Отменяем показ анимации, если она уже была выполнена
        var w_top       = $(window).scrollTop()     ; // Количество пикселей на которое была прокручена страница
        var e_top       = $(countbox).offset().top  ; // Расстояние от блока со счетчиками до верха всего документа
        var w_height    = $(window).height()        ; // Высота окна браузера
        var d_height    = $(document).height()      ; // Высота всего документа
        var e_height    = $(countbox).outerHeight() ; // Высота всего документа
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $(".benefits__number").spincrement();
            // $('.benefits__number').css('opacity', '1');
            // $('.benefits__number').spincrement({
            //     thousandSeparator: "",
            //     duration: 1200
            // });
            show = false;
        }
    }); */


     if (!sessionStorage.alreadyClicked) {
        setTimeout(function() {$('#start_modal').modal('show')}, 10000);
        sessionStorage.alreadyClicked = 1;
    }
    
     $("#emailSend").submit(function(e) {
         e.preventDefault();
         var form_data = $(this).serialize();
         $.ajax({
             type: "POST",
             url: "/php/sendMail.php",
             data: form_data,
             success: function () {
                 
                 $('#modalForm').modal('hide');
                 $('#modalFuncYou').modal('show');
                 $('#bxform').trigger('reset');
             },
             error: function (data) {
                 console.log(data);
             }
         });
         return false;
     
     });
 

    $(function() {
        // настройки скролла   
        // Default
        jQuery.scrollSpeed(120, 1000);

        // Custom Easing
        // jQuery.scrollSpeed(100, 800, 'easeOutCubic');
    })

});