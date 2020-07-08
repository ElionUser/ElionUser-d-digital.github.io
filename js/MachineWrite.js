var Txt,Guion;

var Reset = -1;
var CntPhanton = 0;
var CharCounter = -1;
var StopWriteCounter = 0;

//functions 

var Stoped = true;

function laod_Machine()
{
    Txt = load_ID('TxtTtlSlide');
    
    Guion = load_ID('Carr');

    Guion.style.marginTop = '-12px';
    
    setTimeout(GenerateText,2000);
}

function Phanton()
{
    CntPhanton++;
    
    if(CntPhanton % 2 == 0)
    {
        Guion.style.display = 'none';    
    }else {
            Guion.style.display = 'block';
          }
    if(Stoped == true)
    {
        setTimeout(Phanton,0700);
    }
    
    
}

function GenerateText()
{
    Reset++;
    
    switch(Reset) 
        {
           case 0:
                Text = 'Bienvenido a Diarte Digital';
           break;
           case 1:
                Text = 'Presencia en la red y alta en google';
           break;
           case 2:
                Text = 'Diseño de calidad';
           break;
           case 3:
                Text = 'Programación personalizada';
           break;
           case 4:
                Text = 'Creación de base de datos';
           break;
           case 5:
                Text = 'Mantenimiento de programas web.';
           break;
           case 6:
                Text = 'Maquetación en photoshop';
           break;
           case 7:
                Text = 'Diarte Digital';
                Stoped = false;
           break;
        }
    
    ArrayText = Array.from(Text);
    
    
    Write();
    
}

function Write()
{
    CharCounter++;
    
    if(CharCounter < ArrayText.length)
    {
        CharNode = document.createTextNode(ArrayText[CharCounter]);
    
        Txt.appendChild(CharNode);

        console.log();
        
        setTimeout(Write,0100);
    }
    else {
        
        if(Stoped == true)
        {
            setTimeout(Delete,4000);
        }
    }
//    }else {
//        
//        CharCounter = -1;
//        
//        setTimeout(GenerateText,2000);    
//    }
    
    
}


function Delete()
{
    allChars = Txt.textContent;
        
    if(allChars.length > 0)
    {
        Subs = allChars.slice(0,-1);
        
        TextNodeSubs = document.createTextNode(Subs);
        
        Txt.innerHTML = "";
        
        Txt.appendChild(TextNodeSubs);  
        
        setTimeout(Delete,0040);
        
    }else if (allChars.length == 0) {
        
        CharCounter = -1;
        
        Gener = setTimeout(GenerateText,2000);      
    }
    
    
}


    
function load_ID(_ID_)
{
    return document.getElementById(_ID_);
}

addEventListener('load',laod_Machine,false);
addEventListener('load',Phanton,false);