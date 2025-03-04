import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  
  
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 "
    >
      {data.tasks.map((elem, idx)=>{

        if(elem.statusActive){
          return <AcceptTask key={idx} data={elem} />
        }

        if(elem.newTask){
          return <NewTask key={idx} data={elem} />
        }

        if(elem.completed){
          return <CompleteTask key={idx} data={elem} />
        }

        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
        
      })}
    </div>
  );
}

export default TaskList;
