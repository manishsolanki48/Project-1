//Menu Animation
// $('#show-btn').click(function(){
//     console.log("hi");
//     $('.topsection').toggle();
// });

// $('#menu a').click(function(){
//     $(this).show();
// });

// popup buttton
$('#contactForm').click(function(){
    $(".formsection").show();
});

$('.closeForm').click(function(){
    $(".formsection").hide();
});


// Mobile Code

if ($(window).width() < 768) {
    $('#menu a').click(function(){
        $('.topsection').hide();   
    });
 }

//  slidetoggle menu

// $('#show-btn').click(function(){
//         $('.topsection').slideToggle();
// }); 

// slide menu
$('#show-btn').click(function(){
    $('.topsection').toggleClass("openmenu");
});
