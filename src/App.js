import React,{useState,useEffect}from 'react';
import styles from "./App.css";
import axios from 'axios';
import Question from "./component/question";
import Timer from "./component/Timer";
import NextPrev from "./component/next_prev"
const Api_uri="https://opentdb.com/api.php?amount=20&category=22&difficulty=medium&type=multiple";

function App(){
   const [questions,SetQuestions]=useState([]);
   const [score,setScore]=useState(0);
   const [currentindex,setCurrentindex]=useState(0);
   const [gameEnded,setGameEnded]=useState(false)
 

   useEffect(() => {
     fetch(Api_uri)
    .then((res)=>res.json())
    .then((data)=>{
          const questions=data.results.map((question)=>
           ({
             ...question,
             answers:[
               ...question.incorrect_answers,
               question.correct_answer
             ].sort(()=>Math.random()-0.5)

           })
          )
           
           SetQuestions(questions)  ;  
    }
    )

   },[])

   function handleSubmit(event){
       if(event.target.value === questions[currentindex].correct_answer){
      setScore(score+1);
      }   
          
    }
   
   function prev(){
     if(currentindex <= 0){
      
      setCurrentindex(0) 
     }
     else
   { setCurrentindex(currentindex-1);}
    
   }
   function next(){
    setCurrentindex(currentindex+1);
    if(currentindex >= questions.length-1 ){
     setGameEnded(true);
    }
   }

   function timeended(){
      setGameEnded(true);
   }
    return  gameEnded ? (
      <h5 className='text-3xl text-white font-bold'>Score : {score}</h5>
    ): (questions.length > 0? (
     <div className='container'>
       <Timer timeEnded={timeended}/>
     { questions[currentindex] &&(
     <Question     
       data={questions[currentindex]}
       handleSubmit={handleSubmit}
       
      ></Question> )

      } 
     
     <NextPrev  next={next} prev={prev}/>
     </div> 
  ):(<h1 className='text-2xl text-white font-bold'>Loading</h1>))
}
export default App;
