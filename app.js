//Notes APP Creation-------------
            //Using Yargs
//--------------------------------------------//
const notes = require('./notes')
const yargs = require('yargs')

// customize yargs version
yargs.version('1.1.1')
//Provides Process Arguments 
//console.log(process.argv)


//Create Add Command in Yargs
yargs.command({
    command : 'add',
    describe: 'Add a New note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//Create Remove Command in Yargs
yargs.command({
    command : 'remove',
    describe: 'Remove note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//Create Read Command in Yargs
yargs.command({
    command : 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

//Create List Command in Yargs
yargs.command({
    command : 'list',
    describe: 'List notes',
    handler(){
       notes.listNotes()
    }
})
//Provides Yargs Arguments
//console.log(yargs.argv)

//Parsing the Yargs
//yargs.argv
yargs.parse()
