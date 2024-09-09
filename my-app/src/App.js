
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


/*class :-*/ /*(rcc) */

/*import React, { Component } from 'react'

export default class App extends Component {
  state ={
    name : 'madanapalle'
  }
  render() {
    return (
      <div>
        <h1>wellcome  to {this.state.name}</h1>
      </div>
    )
  }
}*/

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/*function : -*/ /**(racfc) */

/*import React, {useState} from 'react'

const App = () => {
  const [name,setName] = useState ('madanapalle')
  return (
    <div>
      <h1>wellcome to {name}</h1>
    </div>
  )
}

export default App*/


///////////////////////////////////////////////////
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////

/**state and props :--- */

/*import React, { Component } from 'react'
import Display from './Display'
export default class App extends Component {
  state ={
    name : 'hello candy'

  }
  render() {
    return (
      <div>
       <Display name={this.state.name}/>
      </div>
    )
  }
}*/

/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


/**styling in react js :-- */


/*import React from 'react'
import './App.css'
const App = () => {
  const styling ={
  color: "white", 
  backgroundColor: "lightgray",
  textAlign: "center", 
  padding : "50px"
    
  }
  return (
    <div style={{margin: "20px"}}>
      <h1 style={styling}>hello world</h1>
    </div>
  )
}

export default App*/

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

/**On click event handler :---*/

/*import React from 'react'

const App = () => {
  return (
    <div>
      <button onClick={() => console.log("clicked")
      }>
        click here
      </button>
    </div>
  )
}

export default App*/



////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**useState in React JS :--- */

/*import React, {useState} from 'react'

const App = () => {
 const [name,setName] = useState ("jayanth")
  return (
    <div>
      <center>
      <h1>{name}</h1>
      <button onClick={() => setName("kotapalli")}>
        change
      </button>
      </center>
    </div>
    
  )
}

export default App*/


//ex :- 2

/*import React, {useState} from 'react'

const App = () => {
 const [count,setCount] = useState (0)
  return (
    <div>
      <center>
      <h1>{count}</h1>
      <button onClick={() => setCount (count+20)}>
        change
      </button>
      </center>
    </div>
    
  )
}

export default App*/



//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


/**useEffect in react js :--- */


/*import React, {useState,useEffect} from 'react'

const App = () => { 
const [Count,setCount] = useState (0);
useEffect(()=> console.log(Count),[Count])
  return ( 
    <div>
      <center>
        <p>you clicked {Count} times</p>
        <button onClick={() => setCount(Count + 1)}> 
          Click Me
        </button>
      </center>
    </div>
  )
}

export default App;*/

////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////



//on change event handler:--

/*import React, {useState} from 'react'

const App = () => {
  const [user,setUser] = useState ("")
  const handler = e => {
    setUser(e.target.value)
  }
  return (
    <div>
      <center>
        <input type="text" placeholder="username" value={user} name="user"
        onChange={handler}
        /><br/>
        {user}
      </center>
    </div>
  )
}

export default App*/

/*import React,{useState} from 'react'

const App = () => {
  const [user,setUser] = useState ("")
  const handler = e => {
    setUser (e.target.value)
  }
  return (
    <div>
      <center>
        <input type="text" placeholder="username" value={user} name="user"
        onChange={handler}
        
        /><br/>
        {user}
      </center>
    </div>
  )
}

export default App*/

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////


//on submit handler in react :---

import React , {useState} from 'react'

const App = () => {
  const [data,setData] = useState ({

    username: '',
    password: '',

  })
  const {username,password} = data;
  const onChange = e => {
    setData({...data,[e.target.name] : [e.target.value]})
  }

  const  submitHandler = e =>{

    e.preventDefault();
    console.log(data);
    
  }

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
      <input type="text" placeholder="Username" value={username} name="username"
      onChange={onChange}
      /> <br/>

      <input type="text" placeholder="Password" value={password} name="password"
      onChange={onChange} /><br/>

      <input type="submit" name="submit"/>
            </form>
      </center>
    </div>
    
  )
}

export default App 
