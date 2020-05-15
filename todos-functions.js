console.log(uuidv4())

// Fetch existing todos in local storage
const getSavedNotes = function(){

    //Local storage
    const todosJSON = localStorage.getItem('todos')
    
    if(todosJSON !== null){
            return JSON.parse(todosJSON)
    }else{
        return []
    }
 }

//savetodos to local storage
const saveTodos = function(todo){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//renderTodos
const renderTodos = function(todos, query){

    // return true if what user is typing matches todos object text property
    // this returns an array of objects
    let filteredTodo = todos.filter(function(todo){
            if (todo.text.includes(filters.searchText)){

                    return true
                    debugger
            } else {return false}
            
    })

    filteredTodo = filteredTodo.filter(function(todo){
            if (filters.hideCompleted){
                    return !todo.completed
            } else{ return true }
    })

    const incompleteTodos = filteredTodo.filter(function(todo){
            return !todo.completed
    })

    // make that div blank every time
    document.querySelector('#todos').innerHTML = ''
    
    document.querySelector('#todos').appendChild(generatesummaryDom(incompleteTodos))

    filteredTodo.forEach(function(todo){

            document.querySelector('#todos').appendChild(generateTodoDom(todo))
    })
}

//generateTodoDom

const generateTodoDom = function(todo){
    const tododiv = document.createElement('div')
    const checkbox = document.createElement('input')
    const todotext = document.createElement('span')
    const removeButton = document.createElement('Button')

    
    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    tododiv.appendChild(checkbox)
    
    //setup todo text 
    todotext.textContent = todo.text
    tododiv.appendChild(todotext)

    //setup button

    removeButton.textContent = 'x'
    tododiv.appendChild(removeButton
        
        )




    return tododiv
}


//generatesummaryDom
const generatesummaryDom = function(incompleteTodos){
        const summary = document.createElement('h2')
        summary.textContent = `You have ${incompleteTodos.length} TODO'S LEFT`
        return summary
}