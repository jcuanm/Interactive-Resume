/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('a[href^="#"]').click(function(e){
        
        e.preventDefault();
        
        var target = $(this).attr('href');
        var strip = target.slice(1);
        var anchor = $("a[name='" + strip + "']");
        
        $('html,body').animate({
            
           scrollTop: anchor.offset().top
            
        },'slow');
        
    });
});