//! todo list 

//* giving messages to the user

alert(`Hello user....
This is the TO-DO list ,which is created by Pradeep.
`)
alert(`Add your duties in the input box which is given
 below and click add button to save as a list.
 single click the created list if you completed and 
 double click the  created list if you want to delete it.`)

 //? declaring the array and object
let taskArr=[];

//? function run when the user press the add button

let userValue=document.getElementById("inputBox");

userValue.focus();
function createTask(userInput,isCompleted,taskId){
    let taskObj;
    let newElement=document.createElement("div");
    newElement.innerText=userInput;
    container.append(newElement)
    if(isCompleted)
    newElement.setAttribute("class","newDiv completed")
    else newElement.setAttribute("class",("newDiv"))
     newElement.setAttribute("id",taskId)
   //? showing differently when clicking the new division
    newElement.addEventListener("click",toggleTask)

    function toggleTask(){
        this.classList.toggle("completed")
      
    
          let newId=this.id ;             
         for(i=0;i<taskArr.length;i++){
             taskObj=taskArr[i];  
         if(taskObj.id==newId)
          
         taskArr[i].isCompleted=!taskArr[i].isCompleted 
         }
        
        setTask() 
 
    }
      

   
   //? removing the new division when double clicking it
   function clearDiv(){
     let newId=this.id
    for(i=0;i<taskArr.length;i++){
        if(taskArr[i].id==newId)
        taskArr.splice(i,1)
    }
    this.remove();
    setTask()
   }
   newElement.addEventListener("dblclick",clearDiv);
   
}

function setTask(){
    localStorage.setItem("tasks",JSON.stringify(taskArr))
       
}

function getTask(){
     
    let task= localStorage.getItem("tasks")

    task=JSON.parse(task)
     for(index in task){
    createTask(task[index].value,task[index].isCompleted,task[index].id)
    taskArr.push(task[index]) 
     }
}
getTask()
function addButton(){
    
    userInput=userValue.value;
  let obj={};
    obj.value=userInput;
    obj.isCompleted=false;
    taskId=Math.random()
    obj.id=taskId;
    taskArr.push(obj);
 //? for setItem in localStorage 
   setTask()
   
    //? alerting the user to enter something
    if(userInput===""){
        alert("please enter some value")
        return
    }
 let count=0;
 let inputLength=userInput.length;
 
 for(i=0;i<inputLength;i++){
     if(userInput[i]===" ")count++
 }
 
 if(count===inputLength){
     alert("please enter some valid task")
     return 
 }
 
    //? creating the new division when clicking the add button
    createTask(userInput,false,taskId)
userValue.value=""    
userValue.focus()
}

    
//? runs when clicking the enter button 
    addBtn.addEventListener("click",addButton);
function controlEnter(event){
 if(event.key==="Enter")addButton();
 
}
inputBox.addEventListener("keyup",controlEnter)
