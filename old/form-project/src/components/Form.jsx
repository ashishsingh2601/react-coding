import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.length < 10 || !email.includes("@")){
            setError("Invalid Input");
        }
        // if(){
        //     setError("Email ain't valid");
        // }

    }

  return (
    <main>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" id="name_label">Name: </label>
            <input type="text" id="name" aria-labelledby="name_label" onChange={(e) => setName(e.target.value)} />
      
            
            <label htmlFor="email" id="email_label">Email: </label>
            <input type="email" id="email" aria-labelledby="email_label" onChange={(e) => setEmail(e.target.value)} />

            <input type="submit" value="Submit" />

            <small>{error}</small>
        </form>
    </main>
  )
}

export default Form