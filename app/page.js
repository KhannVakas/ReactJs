// ------------------------> Two way binding

// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [username, setusername] = useState("")
//   return (
//     <>
//     <h1 className='mb-5 text-2xl'>Enter your name:</h1>
//     <form>
//       <input type="text" className='border-2 border-zinc-800 px-4 py-2 text-xl' value={username} onChange={(e)=>{
//         // console.log(e.target.value);
//         setusername(e.target.value)
//         console.log(username);
        
        
//       }}/>
//     </form>
//       </>
//   )
// }

// export default page

// ----------------------> Routing, Dynamic binding | App Routing <--------------

// we can make layout.js folder in every component 
// import React from 'react'

// const page = () => {
//   return (
//     <>
//     <h1 className='text-2xl font-bold'>This is home page</h1>
//     <a href="/Contact">Contact</a>
//     </>
//   )
// }

// export default page


// "use client"
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'

// const page = () => {
//   const [users, setusers] = useState([])
//   const getUsers =async ()=>{
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users"); // api say jo hamain response mil rha hai uskay andar data name k object ko access krna
//     // console.log(data);
//     setusers(data)
//     console.log(users);
    
//   }
  
//   useEffect(() => {
//     getUsers()
 
//   }, [])
  
//   return (
//     <>
//     <button onClick={getUsers}className='bg-green-600 text-white px-4 py-2 rounded font-bold'>Get Data</button>
//     <div className="p-8 bg-slate-100 mt-5">
//       <ul>
//       {users.map((e)=>{
//         return <li>{e.username} --- <a href={`/
//           ${e.id}`}>Explore</a></li>
//       })}
//       </ul>
//     </div>
//     </>
//   )
// }

// export default page -----------> is topic ki smaj ni ayee

// -------------> Context API <-----------------------------------
// "use client"
// import Header from '@/Components/Header'
// // import React from 'react'
// import React, { useState } from 'react'


// const page = () => {
//   const [num, setnum] = useState("10")
//   return (
//     <div>This is Home page
      
//       <Header num={num}/> {/* page say header me data transfer krna but istarah data header me bhi jarha hai or nav me bhi jb k hamain data sirf nav me bhejna hai to iskay liyay hum context api ka use krengay. Matlab side pe data rakh dengay phir jis element ko chahiyay to wo wahan say leskta hai*/}
//     </div>
//   )
// }

// export default page 

// "use client"
// import Header from '@/Components/Header'
// import { MyContext } from '@/Helper/Context'
// import React, { useContext } from 'react'

// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user);
  
//   return (
//     <div>Home Page b <br/> {user}
//     <Header/>
//     </div>
//   )
// }

// export default page


// -----------------> Showing Flash Message (react toastify)
// react toastify is a library

// "use client"
// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//   const notify = ()=>{
//     toast.success('🦄 Wow so easy!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       // transition: Bounce,
//       });  
//   }
//   return (
//     <div>
//       <button onClick={notify}>Login</button>
//       <ToastContainer />
//     </div>
//   )
// }

// export default page

// ---------------------> Server side renderring and Client side rendering
// -> user client side pe betha hota hai
// -> jb k hum server side pe q k hum develepor hain

// Q. How to do Server side rendering? Ans. because we are learning react js with next js to nextjs k sath default me hee server side rendering hoti hai
//   q k jb hume "use client" side nahi likha hota to ye defaultly server side rendering krta hai. Hum "use client" likh k client side rendering krwa sktay hain

// "use client"
// import axios from 'axios';
// import { getNamedRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex';
// import React, { useState } from 'react'
// import { jsx } from 'react/jsx-runtime';

// const page = () => {
//   try {
//     const [userdata, setuserdata] = useState("")
//   const [num, setnum] = useState("10");
//   const getData = async ()=>{
//     const res =await axios.get("https://picsum.photos/v2/list")
//     const a = JSON.stringify(res.data)
//     setuserdata(a)    
//   }
//   return (
//     <div>
//       <button onClick={getData}>Click</button>
//       {userdata}
//     </div>
//   )
//   } catch (error) {
//     console.log("Failed to get images");
    
//   }
  
// }

// export default page


// ---------------------------------------------> Deploymen via Netlify <------------
import React from 'react'

const page = () => {
  return (
    <div>Deployment</div>
  )
}

export default page