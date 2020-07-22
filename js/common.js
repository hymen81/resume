$(function () {

    //animate avatar info
    $('.avatar_pic,.tel_me').click(function () {
        $('.tip_avatar_bg').show().transition({
            opacity: 100,
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            rotateX: '0deg'
        }, 500, 'easeOutQuart', function () {
            $('body').addClass('of');
            $('.tip_avatar').show().transition({
                opacity: 50
            }, 500, function () {
                $('.tip_avatar_bg').hide().css({
                    opacity: 0,
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    scale: 1,
                    y: 0,
                    rotateX: '0'
                });
            });
        });
    });

    $('.tip_close').click(function () {
        $(this).transition({
            rotate: '180deg'
        }, 300);
        $('body').removeClass('of');
        $('.tip_avatar').transition({
            scale: 0.8,
        }, 500, 'easeOutQuart').transition({
            y: -500,
            opacity: 0
        }, function () {
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
    $('.info_timeline ul li').mouseenter(function () {
        $(this).animate({ fontSize: "2em" });

        $(this).addClass('curr');
        $(this).parent().addClass('focus');
        var s_id = $(this).attr('id');
        $('.info_content').addClass('over')
        $('.' + s_id).addClass('curr');
    });
    $('.info_timeline ul li').mouseleave(function () {
        $(this).animate({ fontSize: "1em" });
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
    function open_layout() {
        $('.tip_close').click();
        $('body').addClass('of');
        $('.tip_product').transition({
            top: '0',
            background: '#fff'
        }, 500, 'easeOutQuart', function () {
            $('.tip_area_close').show().transition({
                opacity: 1
            });
        });
    }
    function del_slide() {
        $('.carousel').removeClass('slide');
    }
    function add_slide() {
        $('.carousel').addClass('slide');
    }

    function work_detail(work_name, index) {
        $(work_name).click(function () {
            del_slide();
            $('.carousel').carousel(index);
            add_slide();
            open_layout();
        });
    }

    var work_names = ['.mycar8891', '.kinesis', '.draw', '.fish', '.booking', '.product_2', '.product_3', '.product_4', '.product_5', '.rail', '.card'
        , '.bios_game', '.cat', '.win7', '.swear', '.pizza', '.speech', '.more_works'];

    for (var index = 0; index < work_names.length; index++)
        work_detail(work_names[index], index);

    $('.more_info').click(function () {
    });


    var btn_group_name_expand_ch = "點我展開";
    var btn_group_name_contract_ch = "點我收合";
    var btn_group_name_expand_en = "Expand";
    var btn_group_name_contract_en = "Collapse";
    //群組縮放
    $('.btn_group').click(function () {
        $group_name = $(this);
        $group = $('.' + $group_name.attr("id"));

        //收合
        if ($group.is(":visible")) {
            $group.hide(100);
            $group_name.text(i18n.locale === 'en' ? btn_group_name_expand_en : btn_group_name_expand_ch);
            $group_name.parent().children('h4').children('i').attr('data-icon', "L");
            $group_name.css('display', '');
            $group.parent('li').children('.btn_detail').hide();

        }
        //展開 
        else {
            $group.show("fast");
            $group_name.text(i18n.locale === 'en' ? btn_group_name_contract_en : btn_group_name_contract_ch);
            $group_name.parent().children('h4').children('i').attr('data-icon', "K");
            $group_name.css('display', 'block');
            $group.parent('li').children('.btn_detail').css('display', 'block').show();
            //alert($group.parent('li').children('.btn_detail').length);
            //  $group_name.css('display','block');
        }
    });

    $('.carousel-control,.btn_go,.btn_more').bind('click', function () {
        $('.carousel-inner').scrollTop(0);
    });


    $('.tip_area_close').click(function () {
        $(this).hide().css({
            opacity: 0
        });
        $('.tip_product').transition({
            top: '100%',
            background: 'rgba(255,255,255,0.2)'
        }, 500, 'easeOutQuart', function () {
            $('body').removeClass('of');
        });
    });

    //Scroll
    $('.carousel-inner').scroll(function () {
        scrollPos = $(this).scrollTop();
        $('.logo').css({
            opacity: 1 - (scrollPos / 300),
            top: 50 + (scrollPos / 8) + '%'
        });
        $('.banner_bg').css({
            opacity: 1 - (scrollPos / 300)
        });
        $('.tip_area_close').css({
            background: 'rgba(0,0,0,' + (scrollPos / 300) + ')'
        });
    });

    //close sound help
    $('.close_help').click(function () {
        soundhelpClose();
    });

    $(window).resize(function () {
        if ($(this).width() < 800) {
            //$('.info_content ul li .btn_go').hide();
        }
    });


    $(document).ready(function () {

        $(":button").click(function () {
            //alert(123);
            html2canvas($(".main")[0], {}).then(function (canvas) {
                var $div = $("fieldset div");
                $div.empty();
                $("<img />", { src: canvas.toDataURL("image/png") }).appendTo($div);
            });
        });

    });


});

function soundhelp() {
    $('.sound_help').show().transition({
        opacity: 1,
        bottom: '-10px'
    }, 500);
}
function soundhelpClose() {
    $('.sound_help').transition({
        opacity: 0,
        bottom: '-360px'
    }, 500, function () {
        $(this).hide();
    });
}
function byebye() {
    $('.bye').show().transition({
        opacity: 1
    }, 1000, function () {
        $('body').addClass('of');
    });
}

const i18n = new VueI18n({
    locale: 'en',
    messages
})

new Vue({
    i18n: i18n,
    computed: {
    },
    data: {
    },
    methods: {
        changeToChinese: function (e) { i18n.locale = 'cn' },
        changeToEnglish: function (e) { i18n.locale = 'en' }
    }
}).$mount('.mainapp')






