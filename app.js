
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 1200) {
            $(".nav-link").removeClass("nav-link-all")
            $("#navbar").removeClass("bg-travel")
            $("#navbar").addClass("bg-light")
            $("#navbar").removeClass("bg-about-us")
            $(".nav-link").removeClass("nav-link-about-us")
            $(".nav-link").addClass("nav-link-home")
            $("#navbar").removeClass("bg-contact")
        } else if (scroll >= 1200 && scroll < 1800) {
            $(".nav-link").removeClass("nav-link-all")
            $(".nav-link").addClass("nav-link-about-us")
            $("#navbar").addClass("bg-about-us")
            $("#navbar").removeClass("bg-travel")
            $("#navbar").removeClass("bg-contact")
            $("#navbar").removeClass("bg-light")
            $("#navbar").removeClass("bg-students")
            $(".nav-link").removeClass("nav-link-about-us")
            $(".nav-link").removeClass("nav-link-home")
        }else if (scroll > 1800 && scroll < 3103 ){
            $(".nav-link").addClass("nav-link-all")
            $(".nav-link").removeClass("nav-link-about-us")
            $("#navbar").removeClass("bg-about-us")
            $("#navbar").removeClass("bg-travel")
            $("#navbar").removeClass("bg-light")
            $("#navbar").addClass("bg-students")
            $(".nav-link").addClass("nav-link-about-us")
            $(".nav-link").removeClass("nav-link-home")
            $("#navbar").removeClass("bg-contact")
        } else if (scroll > 3103 && scroll < 4732) {
            $("#navbar").removeClass("bg-travel")
            $(".nav-link").addClass("nav-link-all")
            $("#navbar").addClass("bg-contact")
            $("#navbar").removeClass("bg-light")
            $("#navbar").removeClass("bg-about-us")
            $("#navbar").removeClass("bg-students")
            $(".nav-link").removeClass("nav-link-about-us")
            $(".nav-link").removeClass("nav-link-home")
        } else if (scroll >= 4680 && scroll < 10000) {
            $(".nav-link").addClass("nav-link-all")
            $("#navbar").addClass("bg-travel")
            $("#navbar").removeClass("bg-contact")
            $("#navbar").removeClass("bg-light")
            $("#navbar").removeClass("bg-about-us")
            $("#navbar").removeClass("bg-students")
            $(".nav-link").removeClass("nav-link-about-us")
            $(".nav-link").removeClass("nav-link-home")
        }

        console.log(scroll)
    })
  })