import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Food from "./pages/Food"
import Login from "./pages/Login"
import Drinks from "./pages/Drinks"
import Notfound from "./pages/Notfound"
import Navbar from "./components/Navbar"
import Burgars from "./pages/food/Burgars"
import Salad from "./pages/food/Salad"
import Pizza from "./pages/food/Pizza"
import FoodLayout from "./Layouts/FoodLayout"
import DrinksLayout from "./Layouts/DrinksLayout"
import Cofee from "./pages/drinks/Cofee"
import Juice from "./pages/drinks/Juice"
import Soda from "./pages/drinks/Soda"



function App() {
  return (
    <div>
      <Navbar />


       <Routes>
<Route path="/" element={<Home />} />
<Route path="/food" element={<FoodLayout />}>
<Route index element={<Food />} />
<Route path="burgars" element={<Burgars />} />
<Route path="pizza" element={<Pizza />} />
<Route path="salad" element={<Salad />} />
</Route>

<Route path="/drinks" element={<DrinksLayout />}>
<Route index element={<Drinks />} />
<Route path="soda" element={<Soda />} />
<Route path="cofee" element={<Cofee />} />
<Route path="juice" element={<Juice />} />
</Route>
 <Route path="/Login" element={<Login />} />
<Route path="*" element={<Notfound />} />
     

       
      </Routes>
    </div>

     
  
  )
}

export default App