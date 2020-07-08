function loadCrecentRadius()
{
    circle = document.getElementsByClassName('num-slide-counter')
    childCircle = document.getElementsByClassName('crecent-circle')
    numSlide = document.getElementById('num-slide')

    for(i = 0; i < circle.length ; i++)
    {
        circle[i].addEventListener('click',activated)
    }
}

function activated(e)
{
    ActiveElement = e.target.firstChild.nextSibling

    num = ActiveElement.getAttribute('for')

    numSlide.innerHTML = '0' + num

    for(i = 0; i < childCircle.length ; i++)
    {
        childCircle[i].style.visibility = 'hidden'
        childCircle[i].style.width = '3px'
        childCircle[i].style.height = '3px'
    }
    
    setTimeout(growUp,0300)
}

function growUp()
{
    ActiveElement.style.visibility = 'visible'
    ActiveElement.style.width = '15px'
    ActiveElement.style.height = '15px'

    setTimeout(shrink,0400)
}

function shrink()
{
    ActiveElement.style.visibility = 'hidden'
    ActiveElement.style.width = '3px'
    ActiveElement.style.height = '3px'

    setTimeout(growUp,0400)
}

addEventListener('load',loadCrecentRadius)