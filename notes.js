const fs = require('fs')
const chalk = require('chalk')
const readNotes= (title) =>{
    const notes = loadNotes()
    
    const noteToRead = notes.find((note) =>{
        return note.title === title
    })
    if(noteToRead){
        console.log(chalk.bold.blueBright(noteToRead.title))
        console.log(chalk.bold.yellowBright(noteToRead.body))
    }
    else{
        console.log(chalk.red('Note Not Found'))
    }
}
const listNotes = ()=>{
    
    console.log(chalk.blue("Your Notes: "))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.yellow(note.title))
    });
}
const removeNotes = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) =>{
        return note.title !== title
    })
    saveNotes(notesToKeep)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green('Note Removed Succesfully: ' +title))
    }
    else{
        console.log(chalk.red('No Note Found: ' +title))
    }
}
const addNotes = (title,body)=>{
    const notes = loadNotes()
    // This will load elements of array notes which satisfy the return condition its better than using Filter
    //Find will return the first item it finds instead of traversing through complete list
    const duplicateNotes = notes.find((note) =>{
        return note.title === title
    })
    if(!duplicateNotes){
            notes.push({
                title: title,
                body: body
            })
    
             saveNotes(notes)
             console.log(chalk.green('Note Added: ' +title))
    }
    else{
        console.log(chalk.red('Title Already Taken!!! '+title))
    }
    

}
const saveNotes = (notes)=>{
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}
module.exports = {
    listNotes : listNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    readNotes: readNotes
}