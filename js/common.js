/*执行事件*/
$(function() {



    //animate avatar info
    $('.avatar_pic,.tel_me').click(function(){
        $('.tip_avatar_bg').show().transition({ 
            opacity: 100,
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            rotateX: '0deg'
        },500,'easeOutQuart',function(){
            $('body').addClass('of');
            $('.tip_avatar').show().transition({
                opacity: 50
            },500,function(){
                $('.tip_avatar_bg').hide().css({
                    opacity: 0,
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    scale: 1,
                    y:0,
                    rotateX: '0'
                });
            });
        });
    });

    $('.tip_close').click(function(){
        $(this).transition({
            rotate: '180deg'
        },300);
        $('body').removeClass('of');
        $('.tip_avatar').transition({ 
            scale: 0.8,            
        },500,'easeOutQuart').transition({ 
            y: -500,
            opacity: 0
        },function(){
            $('.tip_avatar').hide().css({
                scale: 1,
                y: 0
            });
            $('.tip_close').css({
                rotate: '0'
            });
        });
    });

    //timeline action
    $('.info_timeline ul li').mouseenter(function(){
$(this).animate({fontSize:"2em"});

        $(this).addClass('curr');
        $(this).parent().addClass('focus');
        var s_id = $(this).attr('id');
        $('.info_content').addClass('over')
        $('.'+s_id).addClass('curr');
    });
    $('.info_timeline ul li').mouseleave(function(){
        $(this).animate({fontSize:"1em"});
        $(this).removeClass('curr');
        $(this).parent().removeClass('focus');
        $('.info_content').removeClass('over')
        $('.info_content .desc').removeClass('curr');
    }); 

    //banner
    $('.carousel').carousel({
        interval: false,
        wrap: true
    });

    //product action
    function open_layout(){
        $('.tip_close').click();
        $('body').addClass('of');
        $('.tip_product').transition({
            top: '0',
            background: '#fff'
        },500,'easeOutQuart',function(){
            $('.tip_area_close').show().transition({
                opacity: 1
            });
        });
    }
    function del_slide(){
        $('.carousel').removeClass('slide');
    }
    function add_slide(){
        $('.carousel').addClass('slide');
    }

    $('.fish').click(function(){
        del_slide();
        $('.carousel').carousel(0);
        add_slide();
        open_layout();
    }); 


    //product carousel (以0为开始)
    $('.booking').click(function(){
        del_slide();
        $('.carousel').carousel(1);
        add_slide();
        open_layout();
    }); 

    $('.product_2').click(function(){
        del_slide();
        $('.carousel').carousel(2);
        add_slide();
        open_layout();
    });

    $('.product_3').click(function(){
        del_slide();
        $('.carousel').carousel(3);
        add_slide();
        open_layout();
    });

    $('.product_4').click(function(){
        del_slide();
        $('.carousel').carousel(4);
        add_slide();
        open_layout();
    });

    $('.product_5').click(function(){
        del_slide();
        $('.carousel').carousel(5);
        add_slide();
        open_layout();
    });

    $('.rail').click(function(){
        del_slide();
        $('.carousel').carousel(6);
        add_slide();
        open_layout();
    });
    $('.card').click(function(){
        del_slide();
        $('.carousel').carousel(7);
        add_slide();
        open_layout();
    });
    $('.bios_game').click(function(){
        del_slide();
        $('.carousel').carousel(8);
        add_slide();
        open_layout();
    });
    $('.cat').click(function(){
        del_slide();
        $('.carousel').carousel(9);
        add_slide();
        open_layout();
    });
    $('.win7').click(function(){
        del_slide();
        $('.carousel').carousel(10);
        add_slide();
        open_layout();
    });
    $('.swear').click(function(){
        del_slide();
        $('.carousel').carousel(11);
        add_slide();
        open_layout();
    });

    $('.btn_more').click(function(){
        del_slide();
        $('.carousel').carousel(12);
        add_slide();
        open_layout();
    });

    $('.more_info').click(function(){
        del_slide();
        $('.carousel').carousel(13);
        add_slide();
        open_layout();
    });

    $('.carousel-control,.btn_go,.btn_more').bind('click',function(){
        $('.carousel-inner').scrollTop(0);
    });


    $('.tip_area_close').click(function(){
        $(this).hide().css({
            opacity: 0
        });
        $('.tip_product').transition({
            top: '100%',
            background: 'rgba(255,255,255,0.2)'
        },500,'easeOutQuart',function(){
            $('body').removeClass('of');
        });
    });

    //Scroll
    $('.carousel-inner').scroll(function() {
        scrollPos = $(this).scrollTop();
        $('.logo').css({
            opacity: 1-(scrollPos/300),
            top: 50+(scrollPos/8)+'%'       
        });
        $('.banner_bg').css({
            opacity: 1-(scrollPos/300)
        });
        $('.tip_area_close').css({
            background: 'rgba(0,0,0,'+(scrollPos/300)+')'
        });
    });

    //close sound help
    $('.close_help').click(function(){
        soundhelpClose();
    });

});

function soundhelp(){
    $('.sound_help').show().transition({
        opacity: 1,
        bottom: '-10px'
    },500);
}
function soundhelpClose(){
    $('.sound_help').transition({
        opacity: 0,
        bottom: '-360px'
    },500,function(){
        $(this).hide();
    });
}
function byebye(){
    $('.bye').show().transition({
        opacity: 1
    },1000,function(){
        $('body').addClass('of');
    });
}

