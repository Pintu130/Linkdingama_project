import React from 'react'

const Todo = () => {
    return (
        <>
            <div className='main-div mx-auto'>
                <div className='child-div '>
                    <figure>
                        <img src='./images/doc.jpg' alt='todologo' className='imge mt-10 ' />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                </div>
                <div className="w-56 bg-white p-0.5 rounded-xl" >
                    <input
                        type="text"
                        className="mx-2 border-transparent"
                        id="exampleFormControlInput1"
                        placeholder="✍ Add Item" />
                    <i className="fa-solid fa-square-plus "></i>
                </div>
                <div className='show'>
                    <button className='btn bg-orange-500 hover:bg-sky-700 hover:text-white'>
                        <span> CHECK LIST</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Todo
