// For Avoiding JS Lint Warnings
/* global $, alert, console */

$(function () {
   
    'use strict';
    
    // Cashing The Height Of Both The Slider & The Header In Variables
    
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
       
        myHeader.height($(window).height());
        
        // Making The Bxslider List Items Be In The Center Of The Window
        
        mySlider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        });
        
    });
    
    // Adding The "Active" Class To The Link Which Will Be Clicked & Removing It From The Other Links
    
    $('.links li a').click(function () {
       
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    // Making The Bxslider List Items Be In The Center Of The Window
    
    mySlider.each(function () {
       
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // Triggering The "Bx Slider" Plugin
    
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    // Moving To The Wanted DIV In A Smooth Way 
    
    $('.links li a').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
        console.log('#' + $(this).data('value'));
        
    });
    
    // The "BX Slider" Plugin Code
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
           
            if (!$(this).is(':last-child')) {
				
                // As Long As We Didn't Reach To The Last Slide, The "active" Class Will Be Added To The Next One Until Reaching To The Last Slide
				
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            } else {
				
                // If Reaching To The Last Slide, The "active" Class Will Be Added To The First Slide Again
				
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());
    
    // Triggering The "Mix It Up" Plugin
    
    $('#Container').mixItUp();
    
    // Adding The "selected" Class To The Clicked Link & Removing It From The Other Links
    
    $('.shuffle li').click(function () {
       
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
    // Triggering The "Nice Scroll" Library
    
    $('html').niceScroll({
        
        cursorcolor: '#1abc9c',
        
        cursorwidth: '10px',
        
        cursorborder: '1px solid #1abc9c',
        
        cursorborderradius: 0
        
    });
    
});