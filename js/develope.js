function loadNavScrollShow()
{

    ScrollNav = document.getElementById('scroll-nav')

    WidthClient = document.body.clientWidth
    HeightClient = document.body.clientHeight

    console.log(WidthClient)

    if(HeightClient > 400 )
    {
        ScrollNav.style.backgroundColor = 'rgb(86, 22, 170)'
        ScrollNav.style.boxShadow = '0px 0px 30px rgba(0,0,0,.3)'
    }

    window.onscroll = function() 
    {
        if(window.scrollY > 400)
        {
            ScrollNav.style.backgroundColor = 'rgb(86, 22, 170)'
            ScrollNav.style.boxShadow = '0px 0px 30px rgba(0,0,0,.3)'
        
        } else {
            ScrollNav.style.backgroundColor = 'transparent'
            ScrollNav.style.boxShadow = '0px 0px 0px transparent'
        } 
    }
}



addEventListener('load',loadNavScrollShow)