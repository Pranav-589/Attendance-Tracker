import './index.css'
import {useState} from 'react'
const EachStudent=(props)=>{
  const {details,updateAttendance,deleteStudent}=props
  const {imageUrl,name,rollNo,section,status,id}=details

  const onDelete=()=>{
    deleteStudent(id)
  }

  return(

    <div>
      <li>
      <div className="card">
        <div className="card-description">
          <div className="image"><img src={imageUrl} alt={name}/></div>
          <div>
            <h1>Name: {name}</h1>
            <h2> RollNo: {rollNo}</h2>
            <h3>Section: {section}</h3>
          </div>
        </div>
        <div className="card-status">
           Attendance: {status}
        </div>
        <div className="card-buttons">
          <button type="button" className="pButton" onClick={()=>updateAttendance(id,"Present")}>Present</button>
          <button  type="button" className="aButton" onClick={()=>updateAttendance(id,"Absent")}>Absent</button>
          <button type="button" onClick={onDelete}>X</button>
        </div>
      </div>
      </li>
    </div>
  )
}

export default EachStudent