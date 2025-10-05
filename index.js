const os = require('node:os')

console.log('informacion del sistema operativo:')
console.log('---------------------------------')


console.log('nombre del sistema operativo', os.platform())
console.log('version del sistema operativo', os.release())
console.log('Arquitectura del sistema operativo', os.arch())
console.log('Memoria total del sistema', os.totalmem())