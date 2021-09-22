import "./App.css"
import foods from "./foods.json"
import { useState } from "react"
import { FoodBox } from "./components/FoodBox.js"
import { AddFoodForm } from "./components/AddFoodForm"
import Search from "antd/lib/transfer/search"

function App() {
	const [foodList, setFoodList] = useState(foods)

	function addNewFood(newFood) {
		const updatedFoodData = [...foodList, newFood]
		setFoodList(updatedFoodData)
	}

	return (
		<>
			<h2>Add food entry</h2>
			<AddFoodForm addFood={addNewFood} />

			<h2>Search</h2>
			<Search foodList={foodList} />

			<h2>Food List</h2>
			<div className="App">
				{foodList.map((food) => {
					return <FoodBox food={food} key={food.name} />
				})}
			</div>
		</>
	)
}
export default App
