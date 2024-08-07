function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 123
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffcc42'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#bc855c'
    } else {
        // Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#2b6b91'
    }
}