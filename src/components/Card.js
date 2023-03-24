import { useState } from "react"
import "../styles/Card.scss"

function Card(){
    const [formData,setForm] = useState({
        age: "",
        name:""
    })
    const [isOn, setIsOn] = useState(false)
    const {age, name} = formData

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setForm({...formData,[name]:value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        setIsOn(true)
        console.log(name, age)
    }

    return(<div className="Card">
        <h2>Add your name and age!!!</h2>
        <form onSubmit={handleSubmit}>
        age:<input type="text" name="age" value={age} placeholder="age..." onChange={handleChange}/>
        name:<input type="text" name="name" value={name} placeholder="name..." onChange={handleChange}/>
        <button type="submit">Enter</button>
        </form>
        {isOn ?<h2 className="display">Your name is {age} and you are {name} years old!!!</h2>: null}
    </div>)
}

export default Card