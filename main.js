let app = document.getElementyById('typewriter');

let typewriter = new typewriter(app,{
    loop:true,
    delay:75,
    cursor: "<span style=' color: #fb4993;'>|</span>",
});

typewriter
.pauseFor (2500)
.typeString ('<span style="color:#fb4993;">Enseño programacion web y hago contenido de la tecnologia.</span>')
.pauseFor(200)
.deleteChars(10)
.start()