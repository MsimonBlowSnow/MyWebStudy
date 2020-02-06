$(function () {
    var flag = false;
    var k = $(window).height();

    $('.next').click(function(){
        $.fn.fullpage.moveSectionDown();
    })
    //这个方法里面接受的是对象
    $('#fullpage').fullpage({
        //是否显示项目导航，默认是不显示的
        navigation: true,
        //navigationPosition: 'left',   //导航位置
        //loopBottom: true, //最后一页是否滚动到第一页
        //loopTop: true,    //第一页是否滚动到最后一页
        //scrollingSpeed:1000,  //滚动的速度是多少，默认是700(700ms),

        //afterLoad是fullpage的一个回调函数，当滚动完成才会执行里面的函数，第二个参数是page的页数
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $('.next').fadeOut();
                $('.search1').show().animate({
                    "left": 350
                }, 1000, function () {
                    $('.keyword').animate({
                        "opacity": 1
                    }, 1000, function () {
                        //搜索框1的隐藏与搜粟框2的显示动画
                        $('.search1').hide();
                        $('.words02').animate({
                            'opacity': 1
                        }, 500);
                        $('.search2').show().animate({
                            'left': 530,
                            'top': 20
                        }, 1000);
                        //沙发图片的显示与变大
                        $('.goods').show().animate({
                            "height": 200,
                            "top": 90,
                            "left": 200,
                        }, 1000, function () {
                            $('.shirt').show();
                            $('.cover').show();
                            $('.next').fadeIn();
                            flag = true;
                        });
                    })
                });
            }

            if (index == 8) {
                $('.btn08').mouseover(function () {
                    $('.btn08A').show();
                });
                $(".btn08A").mouseleave(function (e) {
                    $('.btn08A').hide();
                });

                $(document).mousemove(function (e) { 
                        var pagex = e.pageX-$(".hand08").width()/2+10;
                        var pagey = e.pageY;
                        if(pagey<300){
                            $('.hand08').css({
                                "left": pagex,
                                "top": 300
                            });
                        }else{
                            $('.hand08').css({
                                "left": pagex,
                                "top": pagey
                            });
                        }
                            
                });
                $('.again08').click(function(){
                    $.fn.fullpage.moveTo(1);
                    $('img,.delete').attr('style','');
                })
                
                
            }
        },

        //onLeave是fullpage的一个回调函数，当页面一滚动就会触发，先触发，在进行滚动
        onLeave: function (index, nextIndex, driection) {
            //第二屏到第三屏
            if (index == 2 && nextIndex == 3 ) {
                $('.next').fadeOut();
                $('.shirt').show().animate({
                    "left": 180,
                    "bottom": -(k - 300),
                    "height": 150
                }, 1000, function () {
                    $('.shirt').hide();
                    $('.shirt31').hide();
                    $(".shirt3").show();
                    $('.color3').addClass("color31");
                    $('.next').fadeIn();
                });
            }

            //第三到四屏
            if (index == 3 && nextIndex == 4) {
                $('.next').fadeOut();
                $('.shirt3').hide();
                $('.shirt').hide();
                $('.shirt31').show().animate({
                    "left": 250,
                    "bottom": -(k - 190),
                    "height": 200,
                }, 1000, function () {
                    $('.shirt31').hide();
                    $('.carShirt').show();
                    $('.car').animate({
                        "left": 2000,
                    }, 2000, function () {
                        $('.words41').animate({
                            'opacity': 1
                        }, 100);
                    })
                    $('.note4').animate({
                        "opacity": 1,
                    }, 1000,function(){
                        $('.next').fadeIn();
                    });
                });
            }

            //第四屏到第五屏幕
            if (index == 4 && nextIndex == 5) {
                $('.next').fadeOut();
                $('.hand05').animate({
                    "bottom": 0
                }, 1000, function () {
                    $('.mouse05A').fadeIn();
                    $('.shirt05').show().animate({
                        "top": (k - 300),
                    }, 1000, function () {
                        $('.order05').animate({
                            "bottom": 400
                        }, 1000,function(){
                            $('.next').fadeIn();
                        })
                    })
                })
            }

            //第五屏到第六屏
            if (index == 5 && nextIndex == 6) {
                $('.next').fadeOut();
                $('.shirt05').animate({
                    "top": 2 * k - 500,
                    "width": 66,
                    "left": "40%"
                }, 1000);
                $(".box06").animate({
                    "left": "38%"
                }, 1000, function () {
                    $(".shirt05").hide();
                    $(".box06").animate({
                        "left": "40%",
                        "bottom": "100"
                    }, 1000, function () {
                        $(".box06").hide();
                        $(".address06").show();
                        $(".section6").animate({
                            "backgroundPositionX": "100%"
                        }, 3000, function () {
                            $('.address06').hide();
                            $(".boy06").animate({
                                "height": 200,
                                "bottom": 116
                            }, 1000, function () {
                                $(this).animate({
                                    "left": "50%"
                                }, 1000, function () {
                                    $(".door06").show();
                                    $(".words06").show();
                                    $(".girl06").show().animate({
                                        "height": 200,
                                        "left": "70%",
                                        "bottom": 116
                                    }, 1000, function () {
                                        $(".talk06").show();
                                        $('.next').fadeIn();
                                    })
                                })
                            })
                        });
                    })
                });
            }

            //第六到第七屏
            if (index == 6 && nextIndex == 7) {
                $('.next').fadeOut();
                setTimeout(function () {
                    $('.star07').animate({
                        "width": 110
                    }, 1000, function () {
                        $('.good07').show();
                    });
                }, 1000,function(){
                    $('.next').fadeIn();
                })
            }
        }
    });

});