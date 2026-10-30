import { Outlet, Link } from "react-router"

function DrinksLayout() {
  return (
    <div>
     <h3 className="text-2xl text-amber-900 font-bold p-3">SideBar</h3>
    <div className="flex">
         <aside className="flex flex-col p-5 bg-blue-500 w-30 h-screen rounded-2xl  gap-5 font-bold">
        <Link to="/drinks/juice" className="bg-white text-center rounded-2xl duration-75">Juice</Link>
     <Link to="/drinks/cofee" className="bg-white text-center rounded-2xl duration-75 tex ">Cofee</Link>
     <Link to="/drinks/soda" className="bg-white text-center rounded-2xl duration-75">Soda</Link>
     </aside>
    <Outlet />
    </div>
   </div>
  )
}

export default DrinksLayout