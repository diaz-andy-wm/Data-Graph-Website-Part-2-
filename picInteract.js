/**
 * Created by session1 on 10/19/15.
 */
var main = function() {

    ///make rows shift
    $('#row1').click(function() {
        $("#row1").animate({width: 700});
        $("#row2").animate({width: 100});
        $("#row3").animate({width: 100});
        $("#words1").fadeIn();
        $("#words2").fadeOut();
        $("#words3").fadeOut();
    });
    $('#row2').click(function() {
        $("#row2").animate({width: 700});
        $("#row1").animate({width: 100});
        $("#row3").animate({width: 100});
        $("#words2").fadeIn();
        $("#words1").fadeOut();
        $("#words3").fadeOut();
    });
    $('#row3').click(function() {
        $("#row3").animate({width: 700});
        $("#row1").animate({width: 100});
        $("#row2").animate({width: 100});
        $("#words3").fadeIn();
        $("#words2").fadeOut();
        $("#words1").fadeOut();
    });

    ///make first three pictures change back and forth
    $('#one_one_a').click(function(){
        $("#one_one_a").animate({width: 1, height: 1});
        $("#one_one_b").animate({width: 200, height: 200});
    });
    $('#one_one_b').click(function(){
        $("#one_one_b").animate({width: 1, height: 1});
        $("#one_one_a").animate({width: 200, height: 200});
    });
    $('#one_two_a').click(function(){
        $("#one_two_a").animate({width: 1, height: 1});
        $("#one_two_b").animate({width: 200, height: 200});
    });
    $('#one_two_b').click(function(){
        $("#one_two_b").animate({width: 1, height: 1});
        $("#one_two_a").animate({width: 200, height: 200});
    });
    $('#one_three_a').click(function(){
        $("#one_three_a").animate({width: 1, height: 1});
        $("#one_three_b").animate({width: 200, height: 200});
    });
    $('#one_three_b').click(function(){
        $("#one_three_b").animate({width: 1, height: 1});
        $("#one_three_a").animate({width: 200, height: 200});
    });

    ///make second three pictures change back and forth
    $('#two_one_a').click(function(){
        $("#two_one_a").animate({width: 1, height: 1});
        $("#two_one_b").animate({width: 200, height: 200});
    });
    $('#two_one_b').click(function(){
        $("#two_one_b").animate({width: 1, height: 1});
        $("#two_one_a").animate({width: 200, height: 200});
    });
    $('#two_two_a').click(function(){
        $("#two_two_a").animate({width: 1, height: 1});
        $("#two_two_b").animate({width: 200, height: 200});
    });
    $('#two_two_b').click(function(){
        $("#two_two_b").animate({width: 1, height: 1});
        $("#two_two_a").animate({width: 200, height: 200});
    });
    $('#two_three_a').click(function(){
        $("#two_three_a").animate({width: 1, height: 1});
        $("#two_three_b").animate({width: 200, height: 200});
    });
    $('#two_three_b').click(function(){
        $("#two_three_b").animate({width: 1, height: 1});
        $("#two_three_a").animate({width: 200, height: 200});
    });
    ///make last three pictures change back and forth
    $('#three_one_a').click(function(){
        $("#three_one_a").animate({width: 1, height: 1});
        $("#three_one_b").animate({width: 200, height: 200});
    });
    $('#three_one_b').click(function(){
        $("#three_one_b").animate({width: 1, height: 1});
        $("#three_one_a").animate({width: 200, height: 200});
    });
    $('#three_two_a').click(function(){
        $("#three_two_a").animate({width: 1, height: 1});
        $("#three_two_b").animate({width: 200, height: 200});
    });
    $('#three_two_b').click(function(){
        $("#three_two_b").animate({width: 1, height: 1});
        $("#three_two_a").animate({width: 200, height: 200});
    });
    $('#three_three_a').click(function(){
        $("#three_three_a").animate({width: 1, height: 1});
        $("#three_three_b").animate({width: 200, height: 200});
    });
    $('#three_three_b').click(function(){
        $("#three_three_b").animate({width: 1, height: 1});
        $("#three_three_a").animate({width: 200, height: 200});
    });
};
$(document).ready(main);