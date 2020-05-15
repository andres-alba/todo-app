//**********challenge lesson 57 */
// 1.set up a div contain for todos
// 2. setup fliters (searchtesxt) and wire up a new  filter input to change it
// 3. create a rendertodos function to render and rerender the latest filtered data


let todos = getSavedNotes()

const filters = {
        searchText: '',
        hideCompleted: false
}

renderTodos(todos,filters)

// this is how we filter the todos using the text input
document.querySelector('#todo-text1').addEventListener('input', function(e){
        
        filters.searchText = e.target.value
        renderTodos(todos, filters)
    })

const addtext = function (todos, text){
        todos.text.push(text)
}

document.querySelector('#todoform').addEventListener('submit', function(e){
        e.preventDefault()
        todos.push({
                id: uuidv4(),
                text: e.target.elements.firstname.value,
                completed: false
        })

        saveTodos(todos)
        renderTodos(todos, filters)
        console.log(todos)
        e.target.elements.firstname.value = ''
    })



//************************Challenge lesson 59 */
// create a checkbox and setup event listener -> hide completed
// create new hide_completed filter (default false))
// update hidecompleted an rerender list on checkbox change
// setup rerendertodos to remove completed items


document.querySelector('#hide-completed').addEventListener('change', function(e){
        filters.hideCompleted = e.target.checked
        renderTodos(todos, filters)
})


