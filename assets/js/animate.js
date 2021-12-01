$(document).ready(function() { 
    $('.header').find('.header-title').addClass('zoomInFade').removeClass('hide')
    $('.header').find('p').addClass('zoomInFade').removeClass('hide')
    $('.header').find('.image').addClass('zoomInFade').removeClass('hide')
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
                                    $('.victim-story-effect').find('.heading-title').removeClass('hide').removeClass('fadeInUp')
                                    $('.victim-story-effect').find('.heading-title').addClass('fadeInUp')
                                 })
                                 .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".victim-story-effect"})
                                 .triggerHook(0.70)
                                 .on("enter",(e)=>{
                                    $('#container-victim-story, #container-victim, .section-title, .description-title').removeClass('hide').removeClass('fadeInUp')
                                    $('#container-victim-story, #container-victim, .section-title, .description-title').addClass('fadeInUp')
                                 })
                                 // .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);