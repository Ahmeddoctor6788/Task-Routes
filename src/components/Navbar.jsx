import { Link, NavLink } from "react-router"

function Navbar() {
  return (
   <div className="container mx-auto px-4 sticky top-0 z-50">
     <nav className="Navbar shadow-2xl py-5 bg-white ">
      <div className="flex justify-between items-center">
        
<Link to={"/"} className="font-bold text-3xl">Eraasoft</Link>
<ul className="flex gap-10">
  <li>
    <NavLink to={"/"} className="font-bold text-xl hover:text-blue-400 py-2">Home</NavLink>
  </li>
  <li>
    <NavLink to={"/food"} className="font-bold text-xl hover:text-blue-400 py-2">Food</NavLink>
  </li>
  <li>
    <NavLink to={"/drinks"} className="font-bold text-xl hover:text-blue-400">Drinks</NavLink>
  </li>
</ul>
      </div>

    </nav>
   </div>
  )
}

export default Navbar