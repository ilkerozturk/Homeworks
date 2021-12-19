let taskDOM;
let liDOM;
let addliDOM;
let taskValue;
let clicks = 0

let buttonDOM = document.querySelector('#liveToastBtn').addEventListener('click', newElement)



function newElement(event) {
    event.preventDefault()
    taskDOM = document.querySelector('#task')
    liDOM = document.querySelector('#list')
    addliDOM = document.createElement('li')
    checkElement();
}

function checkElement() {

    if (taskDOM.value == "" || taskDOM.value == null) {
        alert('Lütfen bir değer giriniz!')
    }
    else {
        liDOM.append(addliDOM);
        addliDOM.innerHTML = taskDOM.value;
        addElement()
    }
}

function addElement(){
    
    clicks ++
    localStorage.setItem('click_count', clicks)
    taskfunction = () => {
        localStorage.setItem(`task${clicks}`,taskDOM.value)
        taskDOM.value == taskDOM.value ? `${taskDOM.value=''}`: `${taskDOM.value=''}`
    }
    taskfunction();
  
}
