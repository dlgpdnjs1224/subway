$(document).ready(function(){


//sub menu------------
$('#header2_menu').mouseenter(function(){
    $('.sub').stop().slideDown(300)
    $('#sub_bg').stop().slideDown(300)
})
$('#header2_menu').mouseleave(function(){
    $('.sub').stop().slideUp(300)
    $('#sub_bg').stop().slideUp(300)
})

    // 하단 슬라이드
    $('#news_slide_bt>li').click(function(){
        $(this).animate({width:30},250).siblings().animate({width:10},250)
        $(this).css({'background-color':'#ffce32'}).siblings().css({'background-color':'#fff'})
        newsNum = $(this).index() *-270;
        $('#news_slide').animate({'left': newsNum},250)
    })

    //메인 슬라이드
    slideNum = 0;
    $('#slide_bt_button>li').click(function(){
        $(this).animate({width:30},400).siblings().animate({width:10},400)
        $(this).css({'background-color':'#ffce32'}).siblings().css({'background-color':'#fff'})
        slideNum = $(this).index()*-100;
        $('#slide_img_box').animate({'left':slideNum+'%'})
    })

    setInterval(function(){
        if(slideNum <=-300){
            $('#slide_img_box').css({'left':'0'});
            slideNum = 0;
        }
        slideNum = slideNum -100;
        $('#slide_img_box').animate({'left':slideNum+'%'},600)
        slideBtNum = slideNum/-100
        if(slideBtNum==3){slideBtNum=0}
        $('#slide_bt_button>li').eq( slideBtNum ).animate({width:30},400).css({'background-color':'#ffce32'}).siblings().animate({width:10},400).css({'background-color':'#fff'})
    },3000)

    
    //product slide----------------
    $('.menu_arr2').click(function(){
        productNum = $(this).parents().index();
        if(productNum==4){ $('#menu_product_slide'+productNum).animate({'left':'0'},0) }
        else { $('#menu_product_slide'+productNum).animate({'left':'-100%'},400)  }
        
    })
    $('.menu_arr1').click(function(){
        productNum = $(this).parents().index();
        $('#menu_product_slide'+productNum).animate({'left':'0'},400)
    })

    //hover
    $('.product_slide_wrap li').mouseover(function(){
         $(this).css({'width':'360px'}).siblings().css({'width':'280px'})
         $(this).children('.product_slide_wrap ul li img:first-child').css({'width':'340px'})
         $(this).children('p').css({'display':'none'})
         $(this).children('h4').css({'font-size':'23px'})
         $(this).children('.p_serch').css({'display':'block'})
    })
    $('.product_slide_wrap li').mouseout(function(){
         $('.product_slide_wrap li').css({'width':'300px'})
         $(this).children('.product_slide_wrap ul li img:first-child').css({'width':'260px'})
         $(this).children('p').css({'display':'block'})
         $(this).children('h4').css({'font-size':'18px'})
         $(this).children('.p_serch').css({'display':'none'})

    })


    // product tab
    //0 1 2 3
    $('#subway_menu_title>ul>li').click(function(){
        $(this).css({'color':'#009223'}).siblings().css({'color':'#666'})
        $('#subway_menu>div').eq( $(this).index()+1 ).show().animate({'margin-left':0}).siblings('.content').fadeOut(200).animate({'margin-left':'1000px'})
    })
})