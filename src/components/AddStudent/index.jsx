import './index.css'
import {useState} from 'react'

const AddStudent=(props)=>{
const {onAddStudent}=props
 const[name,setName]=useState("")
 const[rollNo,setRollNo]=useState("")

 const onChangeName=(event)=>{
    setName(event.target.value)
 }

 const onChangeRollNo=(event)=>{
    setRollNo(event.target.value)
 }
    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(name,rollNo)
    const newStudent={
        id:Date.now(),
        name:name,
        imageUrl:"",
        rollNo:rollNo,
        batch:"B",
        status:"Not Marked"
    }
    onAddStudent(newStudent)
    setName("")
    setRollNo("")
    
    }

    return(<div className="form-container">
        <form onSubmit={onSubmit} className="student-form">
            <h1>Add Student</h1>
        <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder='Enter a name' onChange={onChangeName} name="name" value={name} required/>
        </div>
        <div className="form-group">
            <label>Roll.No</label>
            <input type="text" placeholder='Enter your rollNo' name="rollNo" onChange={onChangeRollNo} value={rollNo} required/>
        </div>
        <button type="submit" className="add-btn">Submit</button>
        </form>
    </div>)
}

export default AddStudent