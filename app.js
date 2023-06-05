$(() =>{

    let imgIndex = 0
    let totalImages = $('.carousel-images').children().length - 1


    $('.fa-circle-chevron-right').on('click', () => {
        $('.carousel-images').children().eq(imgIndex).css('display', 'none')

        if (imgIndex < totalImages) {
            imgIndex++
        } else {
            imgIndex = 0
        }

        $('.carousel-images').children().eq(imgIndex).css('display', 'block')
    })


    $('.fa-circle-chevron-left').on('click', () => {
        $('.carousel-images').children().eq(imgIndex).css('display', 'none')

        if (imgIndex > 0) {
            imgIndex--
        } else {
            imgIndex = totalImages
        }

        $('.carousel-images').children().eq(imgIndex).css('display', 'block')


    })
})
