// Função   a*(x**2) + b*x + c = 0
//Bashkara  x = (-b (+ or -) ((b**2)-4*a*c)**(1/2))/2*a
function resultado () {
    let a = document.getElementById('txta');
    let b = document.getElementById('txtb');
    let c = document.getElementById('txtc');
    let a1 = Number(a.value)
    let b1 = Number(b.value)
    let c1 = Number(c.value)
    let delta = (b1**2)-(4*a1*c1)
    let raizDelta = (delta)**(1/2)
    let x1 = (-b1 + raizDelta)/(2*a1)
    let x2 = (-b1 - raizDelta)/(2*a1)
    let res = document.getElementById('res')
    
    
    if (delta < 0) {
        res.innerText = `A função NÃO possui raizes reais`
    }
    if(delta >= 0 ){
       res.innerText = `X1  = ${x1}, X2 = ${x2} e Δ ${delta}`    
    }
}