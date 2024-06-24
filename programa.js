const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})    
let lembretes = []

exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    
    1. inserir lembrete
    2. listar lembrete
    3. editar lembrete
    4. marcar como concluído
    5. sair
    `)
    rl.question('escolha uma opcao:', (opcao) => {
       switch (opcao) {
         case '1':
             inserirLembrete()
             break
         case '2':
             listarLembrete()
             break
        case '3':
             editarLembrete()
            break
        case '4':
            marcarComoConcluido()
            break
        case '5':
           rl.close()
           break
        default: 
           console.log('opcao invalida, tente novamente.')
           exibirMenu()
           break
       }   
           
   })
  }

function inserirLembrete(){
    rl.question('Digite o lembrete: ', (lembrete) => {
        rl.question('Digite o prazo: ', (prazo) => {
            rl.question('Foi concluido dentro do prazo: ', (concluido) => {
              lembretes.push({lembrete: lembrete, prazo: parseInt(prazo), concluido: concluido})
              console.log('Lembrete cadastrado com sucesso!')
              exibirMenu()
            })  
          })
      })
   }

function listarLembrete() {
    if(lembretes == 0) {
        console.log('Ainda não há lembretes adicionados.')
    }
    else{
        console.log('Lista de lembretes.')
        lembretes.forEach((lembretes, index) => {
            console.log(`${index + 1}
            Nome: ${lembretes.lembrete}
            Prazo: ${lembretes.prazo}
            Estado: ${lembretes.concluido}`)
        })
    }
    exibirMenu()
}

function editarLembrete() {
    if(lembretes == 0) {
        console.log('Ainda não há lembretes adicionados.')
    }
    else{
        console.log('Lista de lembretes.')
        lembretes.forEach((lembretes, index) => {
            console.log(`${index + 1}. ${lembretes.lembrete}`)
        })
        rl.question('Digite o número do lembrete que deseja editar: ', (numero) => {
            numero = parseInt(numero)

            if(numero > 0 && numero <= lembretes.length) {
                rl.question('Digite o novo nome do lembrete: ', (lembrete) => {
                    rl.question('Digite o novo prazo do lembrete: ', (prazo) => {
                        lembretes[numero -1] = {
                            lembrete, prazo
                        }
                        console.log('Lembrete editado com sucesso.')
                        exibirMenu()
                    })
                })
            }
        })
    }
}