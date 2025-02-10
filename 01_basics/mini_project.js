//trying to make a to do list
let taskArr=[];
function addTask(num) {
    taskArr.push(num);
    return taskArr;
}
function deleteTask(index){
    if(index>=0 && index<taskArr.length){
        let removed = taskArr.splice(index,1);
        return `your Element ${removed} is removed;`
    }else{
        return "invalid index";
    }
}
function viewTasks(){
    console.log("your to do list")
    taskArr.forEach((taskArr,index) => {
        console.log(`${index+1}.${taskArr}`);

    });
}
addTask("Complete JavaScript project");
addTask("Practice Codeforces");
viewTasks();
deleteTask(0);
viewTasks();