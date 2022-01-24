let taskDOM;
let liDOM;
let addliDOM;
let taskValue;



let addMessage = `    
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>


<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    Görev Başarıyla Kaydedilmiştir.
  </div>
</div>`;
let delMessage = `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>


<div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    Görev Kaydı Başarıyla Silinmiştir.
  </div>
</div>`;





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

        addElement()
    }

}

function addElement() {

    let textCOLOR2 = 'black'
    taskfunction = () => {
        localStorage.setItem(taskDOM.value, JSON.stringify([taskDOM.value,textCOLOR2]))
        taskDOM.value == taskDOM.value ? `${taskDOM.value = ''}` : `${taskDOM.value = ''}`
        document.querySelector('#addMessage').innerHTML = addMessage;
    }
    taskfunction();
    
    setTimeout(function(){
        window.location.reload()
    }, 800);
    
}




window.onload = function () {

    for (let i = 0; i <= localStorage.length; i++) {
        let key = localStorage.key(i)
        
        delTask = key;
        if(delTask==null){}
        else{
            delKey = delTask.slice(0,4)
            compKey = delKey;
            spanID = delKey;
        }
        

        if (key === null){
        
        }
        else{
        let style = JSON.parse(localStorage.getItem(`${key}`))[1];
        let value = JSON.parse(localStorage.getItem(`${key}`))[0];
        addliDOM = document.createElement('li')
        liDOM = document.querySelector('#list')
        liDOM.append(addliDOM);
        
        addliDOM.innerHTML = `
        <div class='row d-flex'>
            <div class = 'col-sm-10 mt-1'>
            <span id='${spanID}' style = 'color:${style};'>
            ${value}
            </span>
            </div>
            <div class = 'col-sm-2 mt-1'>
            <button type="button" id="complete" class="btn btn-success" onclick="completeElement('${compKey}');">Tamamla</button>
            <button id='del${i}' type="button" onclick=removeTask('${delKey}') class= "btn btn-danger">Sil</button>
            </div>
     

        </div>
        `;
        
        }
    }
    }





function removeTask(x) {
    
   for (let i = 0; i<=localStorage.length; i++){
        
        let key = localStorage.key(i)
        String(key);
        
        if (key.slice(0,4) === x) {
            localStorage.removeItem(key);
            document.querySelector('#delMessage').innerHTML = delMessage;
            setTimeout(function(){
                window.location.reload()
            }, 600);
        }
    } 
}
function completeElement(x){

    

    for (let i = 0; i<=localStorage.length; i++){
        
        let key = localStorage.key(i)
        String(key);
        
        if (key === null) {
            
            }
            else if(key.slice(0,4) === x){ 
            textCOLOR = 'red';
            textCOLOR1 = 'black';
            localStorage.setItem(`${key}`, JSON.stringify([key,textCOLOR1])) == localStorage.setItem(`${key}`, JSON.stringify([key,textCOLOR1])) ? localStorage.setItem(`${key}`, JSON.stringify([key,textCOLOR])) : localStorage.setItem(`${key}`, JSON.stringify([key,textCOLOR1]))
            window.location.reload();

            }
            

    } 

}




