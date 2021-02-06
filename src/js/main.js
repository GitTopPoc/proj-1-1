$(document).ready(function () {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToShow * itemWidth;
    

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function () {
        if (position === 0)
        {position = -((itemsCount-1) * itemWidth)
            setPosition();
        } else{ position += movePosition; setPosition();} 
       
       
    });

    btnNext.click(function () {
        position -= movePosition;
        
        if ( position < -((itemsCount-1) * itemWidth))
        {position = 0
            setPosition();
        } else setPosition();
    });
    
    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });

    };

    const checkBtns = () => {
        position -= movePosition;
        
        if ( position < -((itemsCount-1) * itemWidth))
        {position = 0
            setPosition();
        } else setPosition();
    };

    setInterval(checkBtns, 7000);

});