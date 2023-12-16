function getRandomColor(){
    let letters ='0123456789ABCDEF'
    let color = '#'
    for (let i=0;i<6;i++){
        color = color + letters [Math.floor(Math.random() * 16 )]
    }
    return color
}

function changeBackgroundColor(){
    let changer = getRandomColor()
    document.body.style.backgroundColor = changer
}