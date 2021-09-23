import "./App.css"
import { Divider } from "antd"
import foods from "./foods.json"
import { useState, useEffect } from "react"
import { FoodBox } from "./components/FoodBox.js"
import { AddFoodForm } from "./components/AddFoodForm"
import Search from "./components/Search"

function App() {
	const [foodList, setFoodList] = useState(foods)
	const [displayedFood, setDisplayedFood] = useState(foods)
	// let [textSearch, setTextSearch] = useState("")

	// useEffect(() => {
	// 	searchFood()
	// }, [textSearch])

	function addNewFood(newFood) {
		const updatedFoodData = [...foodList, newFood]
		setFoodList(updatedFoodData)
		setDisplayedFood(updatedFoodData)
	}

	function searchFood(text) {
		const filteredList = foodList.filter((eachFood) => eachFood.name.toLowerCase().includes(text.toLowerCase()))

		if (text === "") {
			setDisplayedFood(foodList)
		}
		setDisplayedFood(filteredList)
	}

	return (
		<>
			<Divider>
				<h2>Add food entry</h2>
			</Divider>
			<AddFoodForm addFood={addNewFood} />
			<Divider>
				<h2>Search</h2>
			</Divider>
			<Search searchFood={searchFood} />
			<Divider>
				<h2>Food List</h2>
			</Divider>
			<div className="App">
				{displayedFood.map((food) => {
					return <FoodBox food={food} key={food.name} />
				})}
			</div>
		</>
	)
}
export default App
