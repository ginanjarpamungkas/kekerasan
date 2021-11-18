$(document).ready(function() { 
    $('.header').find('.header-title').addClass('zoomInUp').removeClass('hide')
    $('.header').find('p').addClass('zoomInFade').removeClass('hide')
})
 
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement: ".victim-trigger"})
                                 .triggerHook(0.85)
                                 .on("enter",(e)=>{
                                    $('.victim-effect').removeClass('hide').removeClass('fadeInUp')
                                    $('.victim-effect').addClass('fadeInUp')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".victim-count-trigger"})
                                 .triggerHook(0.85)
                                 .on("enter",(e)=>{
                                    $('.victim-count-effect').removeClass('hide').removeClass('fadeInUp')
                                    $('.victim-count-effect').addClass('fadeInUp')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".victim-story-trigger"})
                                 .triggerHook(0.85)
                                 .on("enter",(e)=>{
                                    $('.victim-story-effect').removeClass('hide').removeClass('fadeInUp')
                                    $('.victim-story-effect').addClass('fadeInUp')
                                 })
                                //  .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);