import React ,{useState} from 'react'
import Button from "./button"

function Question({data:{question,correct_answer,answers,incorrect_answers},handleSubmit,showAnswers}) {
   
        return (
        <div>
        <div className='container '>
         
          <div className='bg-white justify-center items-center rounded-lg shadow-md text-purple-800 p-4'>
          <h2 className='text-2xl '>
         {question}
          </h2>
          </div>
          <div className='mt-4 grid grid-cols-2 gap-6 mt-4'>
      
               
        {      
             answers.map(option=>{
                const bgcolor="bg-white text-black";
                 return(
                <Button 
                handleSubmit={handleSubmit} 
                value={option}  
                data={option} 
                className={bgcolor}/> )
              })
        }
        </div>
      </div>
      </div>
    )
}


export default Question
