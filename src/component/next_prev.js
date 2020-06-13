import React from 'react'

function next_prev({next,prev}) {
    return (
        <div >
       <button className="bg-gray-300  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={prev}>
    Prev
       </button>
     <button className="bg-gray-300 float-right hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" on onClick={next}>
    Next
     </button>
</div>
    
    )
}

export default next_prev
