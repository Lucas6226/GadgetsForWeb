// mapa
// 1#>dar-mode
// 1#>mudança-de-cores
// 1#>header/gadget-1
// 1#>config/gadget-2
// 1#>banco/gadget-3
// 1#>quatro-botoes/gadget-4
//     2##>primeiro-botao
//     2##>segundo-botao

var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)

var $tag = (a) => document.getElementsByTagName(a)
var $id = (a) => document.getElementById(a)
var $class = (a) => document.getElementsByClassName(a)
var $query = (a) => document.querySelector(a)
var $name = (a) => document.getElementsByName(a)

// var elemento_query = (a) => document.querySelector(a)

// 1#>dakr-mode
;(function(){
    
    let dark_button = document.querySelector('div#toggle-button')
    let dark_button_cont = 0
    
    dark_button.addEventListener('click', function () {
        let html = document.getElementsByTagName('html')[0]
        let body = document.getElementsByTagName('body')[0]
        
        let dark_button_circle = document.querySelector('div#toggle-button-circle')
        
        if (dark_button_cont == 0) {
            dark_button_circle.style.left = '5%'
            html.style.backgroundColor = 'rgb(226, 226, 226)'
            body.style.backgroundColor = 'rgb(226, 226, 226)'

            root.style.setProperty('--fundo-padrao', 'rgba(171, 171, 171, 0.3)')
            root.style.setProperty('--fundo-padrao-reverso', 'rgb(40, 40, 40)')
            root.style.setProperty('--padrao', 'rgb(190, 190, 190)')
            root.style.setProperty('--padrao-reverso', 'rgba(0, 0, 0, 0.838)')
            root.style.setProperty('--sombra', '1px 2px 7px rgba(132, 132, 132, 0.308)')
            dark_button_cont++
        } else if (dark_button_cont == 1) {
            dark_button_circle.style.left = '53%'
            html.style.backgroundColor = 'rgb(34, 34, 34)'
            body.style.backgroundColor = 'rgb(34, 34, 34)'
            
            root.style.setProperty('--fundo-padrao', 'rgba(0, 0, 0, 0.2)')
            root.style.setProperty('--fundo-padrao-reverso', 'rgb(200, 200, 200)')
            root.style.setProperty('--padrao', 'rgb(20, 20, 20)')
            root.style.setProperty('--padrao-reverso', 'rgb(222, 222, 222)')
            root.style.setProperty('--sombra', 'none')
            
            dark_button_cont--
        }
    })

})()

// 1#>mudança-de-cores
;(function(){
    const chaves_de = Object.keys
    const valores_de = Object.values

    let lista_cores = 
    {ciano: ["aqua", 0],
    azul: ["blue", 0], 
    verde: ["green", 0], 
    amarelo: ["yellow", 0], 
    laranja: ["orange", 0], 
    vermelho: ["red", 0], 
    rosa: ["pink", 0], 
    roxo: ["purple", 0]}
    let cores = []
    
    for (c = 0; c<chaves_de(lista_cores).length; c++) {
        cores.push(document.getElementsByClassName(`cor-${chaves_de(lista_cores)[c]}`)[0])
    }
    
    for (c=0; c<chaves_de(lista_cores).length; c++) {
        cores[c].style.backgroundColor = `${valores_de(lista_cores)[c][0]}`
        cores[c].addEventListener('click', (function(i) {
            return function() {
                mudar_cor(i)
            }
        })(c))
    }
    
    function mudar_cor(c) {
        root.style.setProperty('--cor', `${valores_de(lista_cores)[c][0]}`)
    
        cores[c].style.filter = 'opacity(20%)'
        cores[c].style.height = '1.2em'
        cores[c].style.width = '1.2em'
        cores[c].style.margin = '0px .25em'
        valores_de(lista_cores)[c][1]++
    
        for (i=0; i<cores.length; i++) {
            if (i !== c) {
                cores[i].style.backgroundColor = `${valores_de(lista_cores)[i][0]}`
                cores[i].style.filter = 'opacity(100%)'
                cores[i].style.height = '1.7em'
                cores[i].style.width = '1.7em'
                cores[i].style.margin = '0px 0em'
            }
        }
    }

})()

// 1#>header/gedget-1
;(function(){
    let search_button = $tag('ion-icon')

    for (c=0; c<2; c++) {
        search_button[c].style.top = '0%'
        search_button[c].addEventListener('click', procurar)
        search_button[c].addEventListener('mouseenter', entrou)
        search_button[c].addEventListener('mouseout', saiu)
    }

    function procurar() {
        let search_box = $query('input#search-box')
        search_box.value = ''
    }
    
    function entrou() {
        for (c=0; c<2; c++) {
            search_button[c].style.top = '-10%'
        }
    }

    function saiu() {
        for (c=0; c<2; c++) {
            search_button[c].style.top = '0%'
        }
    }
})()

// 1#>config/gadget-2
;(function (){

})()

// 1#>banco/gadget-3
;(function (){
    let valor = $class('quantia')[0]
    let fundo = $id('botoes').children[0]


    let dado = $name('dice-outline')[0]
    dado.addEventListener('click', function() {

        dado.style.backgroundColor = 'var(--cor)'
        dado.style.color = 'var(--padrao)'
        setTimeout(function() {
            dado.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            dado.style.color = 'var(--padrao-reverso)' 
        }, 150)
        
        let aleatorio = (Math.floor(Math.random() * 900) + 100).toFixed(2)
        valor.children[0].textContent = aleatorio
    })


    let eye_icon = $name('eye-outline')[0]
    let eye_cont = 0
    eye_icon.addEventListener('click',function () {
        let blur = fundo.children

        if (eye_cont == 0) {
            eye_icon.style.backgroundColor = 'var(--cor)'
            eye_icon.style.color = 'var(--padrao)'
            for (let c=0; c<blur.length; c++) {
                blur[c].style.filter = 'blur(.15em)'
            }
            eye_cont++
            
        } else {
            eye_icon.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            eye_icon.style.color = 'var(--padrao-reverso)'
            for (let c=0; c<blur.length; c++) {
                blur[c].style.filter = 'blur(0)'
            }
            eye_cont--
        }
        
    })
    
    const quantia = a => valor.children[0].textContent = `${a}` 
    const somar = a => valor.children[0].textContent = (Number(valor.children[0].textContent)+a).toFixed(2)
    const subtrair = a => valor.children[0].textContent = (Number(valor.children[0].textContent)-a).toFixed(2)
    
    let mais = $class('mais')
    let menos = $class('menos')
    
    $class('reset')[0].addEventListener('click', function () {
        quantia('1100.50')
    })
    
    
    function clarear() {
        fundo.style.filter = 'brightness(130%)'
        setTimeout(function() {
            fundo.style.filter = 'brightness(100%)'
        }, 200)
    }

    
    function adiciona(a) {
        clarear()
        mais[a].style.filter = 'brightness(60%)'
        setTimeout(function() {
            mais[a].style.filter = 'brightness(100%)'
        }, 200)

        if (a == 0) {
            somar(1)
        } else if (a == 1) {
            somar(5)
        } else if (a == 2) {
            somar(10)
        } else if (a == 3) {
            somar(50)
        } else {
            somar(0.25)
        }
    }

    function remove(a) {
        clarear()
        menos[a].style.filter = 'brightness(60%)'
        setTimeout(function() {
            menos[a].style.filter = 'brightness(100%)'
        }, 200)

        if (a == 0) {
            subtrair(1)
        } else if (a == 1) {
            subtrair(5)
        } else if (a == 2) {
            subtrair(10)
        } else if (a == 3) {
            subtrair(50)
        } else {
            subtrair(0.25)
        }
    }

    for (let c=0; c<mais.length; c++) {
        mais[c].addEventListener('click', function() { adiciona(c) })
        menos[c].addEventListener('click', function() { remove(c) })
    }

})()

// 1#>quatro-botoes/gadget-4
;(function () {
    // 2##>primeiro-botao
    ;(function(){
        let botao = $class('botao-1-gdt3')[0]
        let paragrafo = botao.children[0].style
    
        let botao_cont = 0
        botao.addEventListener('click', function () {
            if (botao_cont == 0) {
                paragrafo.top = '-35%'
                botao_cont++
            } else {
                paragrafo.top = '50%'
                botao_cont--
            }
        })
    })()
    
    // 2##>segundo-botao
    ;(function(){
        let botao_2 = document.getElementsByClassName('botao-2-gdt3')[0]
        
        let botao_2_cont = 0
        botao_2.addEventListener('click', function() {
            if (botao_2_cont == 0) {
                botao_2.style.backgroundColor = 'var(--fundo-padrao-reverso)'
                botao_2.style.color = 'var(--cor)'
    
                botao_2_cont++
            } else {
                botao_2.style.backgroundColor = 'var(--fundo-padrao)'
                botao_2.style.color = ' var(--fundo-padrao-reverso)'
    
                botao_2_cont--
            }
        })
    })() 
    
    // 2##>terceiro-botao
    ;(function(){
        let botao = $query('div.botao-3-gdt3') 
        
        let botao_cont = 0
        botao.addEventListener('click', clicou) 
        function clicou() {
            let limpar = $class('fundo-limpar')[0]
            let limpou = $class('fundo-limpou')[0]
            
            if (botao_cont == 0) {
                limpar.style.width = '0px'
                limpou.style.width = '100%'
                botao_cont++
            } else {
                limpar.style.width = '100%'
                limpou.style.width = '0px'
                botao_cont--
            }
        }
    })()

    // 2##>querto-botao
    ;(function() {
        let botao = $class('botao-4-gdt3')[0]
        
        botao.addEventListener('click', function () {
            botao.style.filter = 'brightness(250%)'
            setTimeout(function() {
                botao.style.filter = 'brightness(130%)'
            }, 150)

        })

        botao.addEventListener('mousemove', function() {
            botao.style.filter = 'brightness(130%)'
        })

        botao.addEventListener('mouseout', function() {
            botao.style.filter = 'none'
        })

    })()
})()
