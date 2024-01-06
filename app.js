let imagenes = [
    {
        "url": "img/Carrusel-01.png",
        "nombre": "Transformando ideas en experiencias digitales",
        "descripcion": "En nuestros proyectos de desarrollo web, creamos plataformas dinámicas y funcionales, desde el diseño personalizado hasta la implementación de tecnologías de vanguardia."

    },
    {
        "url": "img/Carrusel-02.png",
        "nombre": "Explora mundos extraordinarios con nuestros juegos cautivadores",
        "descripcion": "En el emocionante campo del desarrollo de videojuegos, nuestros proyectos son laboratorios creativos donde la imaginación se fusiona con la programación. Cada juego es un testimonio de nuestra dedicación a la excelencia."

    },
    {
        "url": "img/Carrusel-03.png",
        "nombre": "Convierte tus ideas en experiencias digitales excepcionales",
        "descripcion": "En el dinámico mundo del desarrollo de aplicaciones móviles, cada proyecto refleja nuestro compromiso con la fusión de la creatividad y la programación. Desde la concepción de conceptos innovadores hasta la implementación de soluciones técnicas sofisticadas."

    },
    {
        "url": "img/Carrusel-04.png",
        "nombre": "Explora el potencial ilimitado de Java.",
        "descripcion": "Aplicaciones versátiles y eficientes desarrolladas en este lenguaje, destacando por su portabilidad, robustez y capacidad para abordar una amplia variedad de plataformas y dispositivos."

    },
    {
        "url": "img/Carrusel-05.png",
        "nombre": "Donde la simplicidad y la potencia del código Python se encuentra",
        "descripcion": "Soluciones de software versátiles y poderosas, destacadas por su legibilidad, flexibilidad y eficacia en el desarrollo de aplicaciones, desde inteligencia artificial hasta desarrollo web."

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}