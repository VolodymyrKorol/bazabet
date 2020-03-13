$('.banner-parallax').on('mousemove',(e)=>{
    const x = e.pageX / $(window).width()

    $('.banner').css({
        'transform': "translateX(-"+x*16+"px)"
    })
    $('.red-player-left').css({
        'transform': "translate(-"+x*13+"px,"+x*1.5+"px)"
    })
    $('.blue-player-left').css({
        'transform': "translate(-"+x*13+"px,"+x*1.5+"px)"

    })
    $('.red-player-right').css({
        'transform': "translate(-"+x*13+"px,"+x*2+"px)"

    })
    $('.blue-player-right').css({
        'transform': "translate(-"+x*13+"px,"+x*2+"px)"

    })
    $('.player-front').css({
        'transform': "translateX(-"+x*28+"px)",
    })
    $('.truck').css({
        'transform': "translateX(-"+x*15+"px)",
    })
})