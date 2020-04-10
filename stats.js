// const os = require('os')

// const { totalmem, freemem } = os

// const total = parseInt(totalmem() / 1024 / 1024)
// const free = parseInt(freemem() / 1024 / 1024)
// const used = parseInt(totalmem() - freemem() / 1024 / 1024)
// const percentsUsed = parseInt(((total - free) / total) * 100)
// const percentsFree = parseInt((free / total) * 100)
    
// const stats = {
//     total: `${total} MB`,
//     usada: `${used} MB`,
//     memoriaLivre: `${free} MB`,
//     porcentagemUso: `${percentsUsed}%`,
//     porcentagemLivre : `${percentsFree}%`
// }
// console.table(stats);

const os = require('os')


const { totalmem, freemem } = os 

setInterval(()=>{

    const total = parseInt(totalmem() / 1024 / 1024)
    const free = parseInt(freemem() / 1024 / 1024)
    const used = parseInt((totalmem() - freemem()) / 1024 / 1024)
    const percentsUsed = parseInt(((total - free) / total) * 100)
    const percentsFree = parseInt((free / total) * 100)
        
    const stats = { 
        total: `${total} MB`,
        usada: `${used} MB`,
        memoriaLivre: `${free} MB`,
        porcentagemUso: `${percentsUsed}%`,
        porcentagemLivre : `${percentsFree}%`
    }

    console.clear()
    console.log("======= Estatisticas do PC")
    console.table(stats)

}, 500)
 




