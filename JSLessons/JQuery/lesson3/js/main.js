const ulviyye = $.noConflict();


ulviyye(function () {
    ulviyye('button').click(function() {
        // ulviyye('p').hide(1000);
        // ulviyye('p').fadeOut(1000);
        // ulviyye('p').fadeIn(1000);
        // ulviyye('p').fadeToggle('slow');
        // ulviyye('p').fadeToggle(1000);
        // ulviyye('p').fadeToggle(1000,()=>{
        //     alert('event success');
        // });
        // ulviyye('p').fadeTo(1000,.2);
        // ulviyye('p').slideDown(1000);
        // ulviyye('p').slideUp(1000);
        // ulviyye('p,h1').slideToggle(2000);
        // ulviyye('p').animate({left:"300px",
        // opacity: '0.5',
        // height: '150px',
        // width: '150px'
        // },1000);
        // ulviyye("p").css("color", "white").slideUp(2000).slideDown(2000);
    //    alert( ulviyye("p").html());
    //    alert( ulviyye("p").text());
    //    alert( ulviyye("input").val());
        // ulviyye('p').html("<b>Hello</b>");
        // ulviyye('p').addClass("a");
        ulviyye('p').toggleClass("a");
        // ulviyye('p').text("<b>Hello</b>");
        // ulviyye("input").val("hello man");


    });
    ulviyye('.stop').click(function() {
        ulviyye('p').stop();
        // ulviyye('p').removeClass("a");
    })
})