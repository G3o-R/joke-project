import { useState } from "react"

function Card(){
    const [formData,setFrom] = useState({
        age: "",
        name:""
    })
    const {age, name} = formData

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setFrom({...formData,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(name, age)
    }

    return(<div className="Card">
        <form onSubmit={handleSubmit}>
        <input type="text" name="age" value={age} placeholder="age..." onChange={handleChange}/>
        <input type="text" name="name" value={name} placeholder="name..." onChange={handleChange}/>
        <button type="submit">Enter</button>
        </form>
        <h2 className="output">Your name is {age} and you are {name} years old!!!</h2>
    </div>)
}

export default Card