import React from 'react'

 const CoursForm = (props) => {
    return (
       <form onSubmit={props.addCourse}>
           <input type="text" value={props.current} onChange={props.updateCourse} />
           <button type="submit">Add course</button>
       </form>
    )
}
export default CoursForm;
