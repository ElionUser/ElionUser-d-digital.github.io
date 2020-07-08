
        
var powerMenu = false

function loadToggleMenu()
{
    MainMenu = document.getElementById('main-menu')
    CancelButton = document.getElementById('cancel-button')
    BoxMenu = document.getElementById('box-menu')
    Links = document.getElementsByClassName('links')

    for(let i = 0 ; i < Links.length ; i++)
    {
        Links[i].addEventListener('click',hiddeMenu)
    }

    CancelButton.addEventListener('click',Toggle)
    BoxMenu.addEventListener('click',Toggle)
}

function Toggle() 
{
    if( powerMenu == false) 
    {
        powerMenu = true 
        MainMenu.style.display = 'block'
    }
    else {
        powerMenu = false
        MainMenu.style.display = 'none'
    }
}

function hiddeMenu()
{
    if(WidthClient < 1080)
    {
        powerMenu = false
        MainMenu.style.display = 'none'
    }
    
}

addEventListener('load',loadToggleMenu)

