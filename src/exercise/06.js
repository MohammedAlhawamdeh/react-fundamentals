// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username , setUsername] = React.useState('')
  const inputRef = React.useRef(null)

  const handleSubmit =(e) =>{
    e.preventDefault();
    const value = inputRef.current.value
    onSubmitUsername(value)
  }
  const handleChange = (e) =>{
    setUsername(e.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input">Username:</label>
        <input value={username} ref={inputRef} id='input' type="text" onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

/*
1- const inoutRef = React.useRef(null);
2- add inoutRef to the element props 'ref'
3- within handling the submit you can access the value with inputRef.current.value
*/
/*
1- identify how to know when the user starts to type with Uppercase (event?)
2- Show a messege before submiting the form 'Username must be lower case'
3- Disable the submit button

*/

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
