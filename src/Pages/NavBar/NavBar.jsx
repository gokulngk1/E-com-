import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='header'>
        <Link to={"/"}><h1>wellcom</h1></Link>
        <ul className="nav-menu">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/AboutMe"}>AboutMe</Link>
            </li>
            <li>
                <Link to={"/Project"}>Project</Link>
            </li>
            <li>
                <Link to={"/Career"}>Career</Link>
            </li>
            <li>
                <Link to={"/Service"}>Service</Link>
            </li>
            <li>
                <Link to={"/Contact"}>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar



// chat

// import React from 'react'
// import "./NavBar.css"
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <nav className='nav-header'>
//         <div className="logo">
//             <Link to={"/"}><h1>Welcome</h1></Link>
//         </div>
//         <ul className="nav-menu">
//             <li>
//                 <Link to={"/"}>Home</Link>
//             </li>
//             <li>
//                 <Link to={"/AboutMe"}>About Me</Link>
//             </li>
//             <li>
//                 <Link to={"/Project"}>Project</Link>
//             </li>
//             <li>
//                 <Link to={"/Career"}>Career</Link>
//             </li>
//             <li>
//                 <Link to={"/Service"}>Service</Link>
//             </li>
//             <li>
//                 <Link to={"/Contact"}>Contact</Link>
//             </li>
//         </ul>
//     </nav>
//   )
// }

// export default NavBar
