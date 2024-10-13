/* // Theory

const array = [1, 2, 2, 5, 20, 42]
// const arrayStrinhs = ['a', 'b', null, 12 ]
// const array = new Array (1, 2, 2, 5, 20, 42)

// console.log(array.length)
//console.log(array[1])
console.log(array.length-1) // array[6-1]
array[0] = 'Privet!'
console.log(array)
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


//console.log(inputElement.value)

//const notes = ['записать блок про массивы', 'рассказать теорию объектов']

/* function render () {

   // for (let i = 0; i < notes.length; i++) {
   //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate (notes[i]))
   //     //console.log(i)
   // }

for(let note of notes) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
}
// listElement.insertAdjacentHTML('beforeend', getNoteTemplate (notes[0]))
//listElement.insertAdjacentHTML('beforeend', getNoteTemplate (notes[1]))
}

render()
*/

// createBtn.onclick = function(){
//     if(inputElement.value.length === 0){
//         return
//     }
//     //listElement.innerHTML = inputElement.value
//     //listElement.innerHTML = 
//     listElement.insertAdjacentHTML(
//     'beforeend', 
//     getNoteTemplate(inputElement.value)
// )
//     inputElement.value = ''
// }

// function getNoteTemplate(title){
//     return ` 
//         <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//             >
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//             </li>
//     `
// }

/*
Object Theory

const person = {
firstName: 'Dasha',
lastName: 'Babich',
year: 2003,
hasBoyfriend: true,
languages: ['ru', 'en', 'de'],
getFullName: function(){
console.log(person.firstName + '' + person.lastName)
}
}
//console.log(typeof person)

console.log(person.year)
console.log(person['languages'])

const key = 'hasBoyfriend'
console.log(person[key])
person.hasBoyfriend = false
console.log(person[key])

person.getFullName()
*/

const notes = [
    {
    title: 'записать блок про массивы', 
    completed: false,
    },
    {
        title:  'рассказать теорию объектов', 
        completed: true,
    },
   ]

function render () {
    listElement.innerHTML = ''
    if(notes.length === 0){
        listElement.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate (notes[i], i))
    }

    //  for(let note of notes) {
    //  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    //  }

    // for(let [note, index] of notes.entries()) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    //    }
 }
 
 render()



createBtn.onclick = function(){
    if(inputElement.value.length === 0){
        return
    }
    //listElement.innerHTML = inputElement.value
    //listElement.innerHTML = 

    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    // listElement.insertAdjacentHTML(
    // 'beforeend', 
    // getNoteTemplate(newNote)
// )
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function(event){
   // console.log(event.target.dataset.index)
   if(event.target.dataset.index){
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type
        if(type === 'toggle'){
        notes[index].completed = !notes[index].completed
        //console.log('toggle', index)
        } else if (type === 'remove')
        {
            notes.splice(index, 1)
        }
        //console.log('remove', index)
   }

   render()
}

function getNoteTemplate(note, index){
   // console.log(note.completed)
    return ` 
        <li
            class="list-group-item d-flex justify-content-between 
            align-items-center"
            >
            <span class="${note.completed ? 'text-decoration-line-through' : '' }">${
                note.title
            }</span>
            <span>
                <span class="btn btn-small btn-${
                  note.completed ? 'warning' : 'success'
                }" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type="remove"
                data-index="${index}">&times;</span>
            </span>
            </li>
    `
}
//data index - 