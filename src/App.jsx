import React from 'react'
import EachStudent from './components/EachStudent'
import AddStudent from './components/AddStudent'
import './App.css'
import {useState} from 'react'
  
const initialStudentsList=[
  {
    id:1,
    imageUrl:"https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-260nw-2558760599.jpg",
    name:"K.Pavan",
    rollNo:"580",
    section:"B",
    status:"Not Marked",
  },
  {
    id:2,
    imageUrl:"https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-260nw-2558760599.jpg",
    name:"P.Srighnan",
    rollNo:"581",
    section:"B",
    status:"Not Marked",
  },
  {
    id:3,
    imageUrl:"https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-260nw-2558760599.jpg",
    name:"R.Haranath",
    rollNo:"582",
    section:"B",
    status:"Not Marked",
  },
  {
    id:4,
    imageUrl:"https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-260nw-2558760599.jpg",
    name:"R.Hemanth",
    rollNo:"584",
    section:"B",
    status:"Not Marked",
  },
  {
    id:5,
    imageUrl:"https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-260nw-2558760599.jpg",
    name:"S.Sreekanth",
    rollNo:"5B6",
    section:"B",
    status:"Not Marked",
  }
]
const App=()=>{
  const [studentsList,setStudentsList]=useState(initialStudentsList)
  const [isAdd,setIsAdd]=useState(false)
  const [filterStatus, setFilterStatus] = useState("All")
  

 const updateAttendance = (id, newStatus) => {
  const updatedList = studentsList.map(each => {
    if (each.id === id) {
      return {...each, status: newStatus}
    }
    return each
  })

  setStudentsList(updatedList)
}

const onPresent = () => {
  setFilterStatus("Present")
}

const onAbsent = () => {
  setFilterStatus("Absent")
}

const onAll = () => {
  setFilterStatus("All")
}

const deleteStudent=(filterId)=>{
 const deletedStudent=studentsList.filter(each=>each.id!==filterId)
 setStudentsList(deletedStudent)
}
 const onAdd=()=>{
  setIsAdd(!isAdd)
 }

 const onAddStudent=(newStudent)=>{
  setStudentsList(prevStudents => [...prevStudents, newStudent])
 }

 const totalCount = studentsList.length

const presentCount = studentsList.filter(
  eachStudent => eachStudent.status === "Present"
).length

const absentCount = studentsList.filter(
  eachStudent => eachStudent.status === "Absent"
).length

const filteredStudents = studentsList.filter(each => {
  if (filterStatus === "All") {
    return true
  }

  return each.status === filterStatus
})

  return(
  <div className="main">
        <div className="header">
          <div>
            <h1>Attendance Tracker</h1>
          </div>
          <div className="navbar">
            <button onClick={onAdd}>Add Student</button>
            <button onClick={onAll}>Total {totalCount}</button>
            <button onClick={onPresent}>Present {presentCount}</button>
            <button onClick={onAbsent}>Absent {absentCount}</button>
          </div>
        </div>
        {isAdd && <AddStudent onAddStudent={onAddStudent}/>}
        <div>
          <ul>
            {filteredStudents.map(each=>
              <EachStudent details={each} key={each.id} updateAttendance={updateAttendance} deleteStudent={deleteStudent} />
            )}
          </ul>
        </div>
  </div>
  )
}

export default App