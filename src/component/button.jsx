import React from 'react'

function button({data,className,handleSubmit,value}) {
  
    return (
        <button 
        onClick={handleSubmit}
        value={value}
         className={`mt-4 mb-4 mr-4  bg-white rounded  shadow p-4  font-semibold   shadow ${className}`}>
 
          {data}
         </button>
           
    )
}

export default button
