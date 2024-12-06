
//Escribe el str que deseas hacer parpadear
const palabra='Escoge la cantidad de sostenidos que tiene el pentagrama'

                            //Funcionalidad



//Texto
let palabraConParpadeo=''
let letraIndividual=0
function parpadeo(){
    palabraConParpadeo=palabraConParpadeo+palabra[letraIndividual]
    
    if (letraIndividual<palabra.length-1){
        letraIndividual++
    }
    else{
        clearInterval(intervaloParpadeo)
    }
    document.getElementById('cartelQueParpadea').innerText=palabraConParpadeo
}
const intervaloParpadeo=setInterval(parpadeo, 75)

//presionar el btn de aceptar o falta enter
const btnAceptar=document.getElementById('btnInicio')
btnAceptar.addEventListener('click', presionarBtnInicio)
document.addEventListener('keydown', presionarEnter)

function presionarBtnInicio(){
    let cantidadDeSostenidos=Number(document.getElementById('inputCantidadDeSostenidos').value)
    if (0<=cantidadDeSostenidos&&cantidadDeSostenidos<8){
        document.getElementById('inicio').style.display='none'
        document.querySelector('main').style.display=''
        switch (cantidadDeSostenidos){
            case 7: 
                document.getElementById('doComoSiSostenido').style.display=''
                document.getElementById('si').style.display='none'
            case 6:
                document.getElementById('faComoMiSostendo').style.display=''
                document.getElementById('mi').style.display='none'

            case 5:
                document.getElementById('laSostenido').style.display=''
                document.getElementById('la').style.display='none'
            case 4:
                document.getElementById('reSostenido').style.display=''
                document.getElementById('re').style.display='none'
            case 3:
                document.getElementById('solSostenido').style.display=''
                document.getElementById('sol').style.display='none'
            case 2:
                document.getElementById('doSostenido').style.display=''
                document.getElementById('do').style.display='none'
            case 1:
                document.getElementById('faSostenido').style.display=''
                document.getElementById('fa').style.display='none'
        }

        if(cantidadDeSostenidos==1){
            document.getElementById('escala').innerText='Escala de Sol mayor o  Mi menor'
        }
            else if(cantidadDeSostenidos==2){
            document.getElementById('escala').innerText='Escala de Re mayor o Si menor'
        }
        else if(cantidadDeSostenidos==3){
            document.getElementById('escala').innerText='Escala de La mayor o Fa# menor'
        }
        else if(cantidadDeSostenidos==4){
        document.getElementById('escala').innerText='Escala de Mi mayor o Do# menor'
        }
        else if(cantidadDeSostenidos==5){
            document.getElementById('escala').innerText='Escala de Si mayor o Sol# menor'
        }
        else if(cantidadDeSostenidos==6){
            document.getElementById('escala').innerText='Escala de Fa# mayor o Re# menor'
        }
        else if(cantidadDeSostenidos==7){
            document.getElementById('escala').innerText='Escala de Do# mayor o La# menor'
        }
    }

    else{
        alert('El valor introducido debe estar entre 0 y 7. Introduce un valor admisible.')
    }
}

function presionarEnter(evento){
    if(event.key=='Enter'){
        presionarBtnInicio()
    }
}

