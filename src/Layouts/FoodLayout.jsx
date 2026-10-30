import { Outlet, Link } from "react-router"


function FoodLayout() {
  return (
   <div>
     <h3 className="text-2xl text-amber-900 font-bold p-3">SideBar</h3>
    <div className="flex">
         <aside className="flex flex-col p-5 bg-blue-500 w-30 h-screen rounded-2xl  gap-5 font-bold">
        <Link to="/food/burgars" className="bg-white text-center rounded-2xl duration-75">Burgars</Link>
     <Link to="/food/pizza" className="bg-white text-center rounded-2xl duration-75 ">Pizza</Link>
     <Link to="/food/salad" className="bg-white text-center rounded-2xl duration-75">Salad</Link>
     </aside>
    <Outlet />
    </div>
   </div>
  )
}

export default FoodLayout