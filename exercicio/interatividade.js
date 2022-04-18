var verIdade = document.getElementById('idade')
    var verFeminino = document.getElementById('F')
    var verMasculino = document.getElementById('M')
    var mensagem = document.getElementById('genero')
    var ano = new Date()
    var anoAtual = ano.getFullYear()
    var idadeAtual = Number(anoAtual) - Number(verIdade.value)
    var img = document.createElement('img')
    var div = document.getElementById('imagem')
      
    //Essa função valida erros e se é masc ou fem, e a idade
    function validando(){
          if(verIdade.value == '' || verFeminino.checked == false && verMasculino.checked == false || Number(anoAtual) < Number(verIdade.value)){
              alert('[ERRO] preencha todos os campos corretamente!')
          }else if(verFeminino.checked){
            
            if(Number(anoAtual) - Number(verIdade.value) >= 0 && Number(anoAtual) - Number(verIdade.value) <=12){
                mensagem.innerHTML = `Uma menina, E tem ${Number(anoAtual) - Number(verIdade.value)} anos.`
                img.setAttribute('src', 'menina.jpg')
                div.appendChild(img)


            }else if(Number(anoAtual) - Number(verIdade.value)<18){
                mensagem.innerHTML = `Uma adolescente, E tem ${Number(anoAtual) - Number(verIdade.value)} anos.`
                img.setAttribute('src', 'adolescente.jpg')
                div.appendChild(img)

            }else if(Number(anoAtual) - Number(verIdade.value)< 50){
                mensagem.innerHTML = `Uma mulher, E tem ${Number(anoAtual) - Number(verIdade.value)} anos.`
                img.setAttribute('src', 'mulher.jpg')
                div.appendChild(img)
            }else{
                mensagem.innerHTML = `Uma senhora, E tem ${Number(anoAtual) - Number(verIdade.value)} anos.`
                img.setAttribute('src', 'senhora.jpg')
                div.appendChild(img)

            }
            
            }else if(verMasculino.checked){
                mensagem.innerHTML = `Um HOMEM, E tem ${Number(anoAtual) - Number(verIdade.value)} anos.`
                if(Number(anoAtual) - Number(verIdade.value) >= 0 && Number(anoAtual) - Number(verIdade.value) <= 12){
                        mensagem.innerHTML = `Um menino, e tem ${Number(anoAtual) - Number(verIdade.value)} anos`
                        img.setAttribute('src', 'menino.png')
                        div.appendChild(img)
                    }else if(Number(anoAtual) - Number(verIdade.value)<18){
                        mensagem.innerHTML = `Um adolescente, e tem ${Number(anoAtual) - Number(verIdade.value)} anos`
                        img.setAttribute('src', 'adolescenteMasc.jpg')
                        div.appendChild(img)
                    }else if(Number(anoAtual) - Number(verIdade.value)<50){
                        mensagem.innerHTML = `Um homem, e tem ${Number(anoAtual) - Number(verIdade.value)} anos`
                        img.setAttribute('src', 'homem.jpeg')
                        div.appendChild(img)

                    }else{
                        mensagem.innerHTML = `Um senhor, e tem ${Number(anoAtual) - Number(verIdade.value)} anos`
                        img.setAttribute('src', 'senhor.jpg')
                        div.appendChild(img)
                    }
                
            }


        }
        


     
        

