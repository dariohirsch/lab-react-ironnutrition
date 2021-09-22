import { Input, Button } from "antd"
import { useState } from "react"

export function AddFoodForm(props) {
	const [name, setName] = useState("")
	const [image, setImage] = useState("")
	const [calories, setCalories] = useState(0)
	const [servings, setServings] = useState(0)

	const handleNameInput = (e) => {
		setName(e.target.value)
	}
	const handleImageInput = (e) => {
		setImage(e.target.value)
	}
	const handleCaloriesInput = (e) => {
		setCalories(e.target.value)
	}
	const handleServingsInput = (e) => {
		setServings(e.target.value)
	}

	const submitFormInfo = (e) => {
		e.preventDefault()
		const newFood = { name, image, calories, servings }

		props.addFood(newFood)
		setName("")
		setImage("")
		setCalories(0)
		setServings(0)
	}

	return (
		<form onSubmit={submitFormInfo}>
			<label>Name:</label>
			<Input value={name} type="text" onChange={handleNameInput} name="name" />
			<label>Image:</label>
			<Input value={image} type="text" onChange={handleImageInput} name="image" />
			<label>Calories:</label>
			<Input value={calories} type="number" onChange={handleCaloriesInput} name="calories" />
			<label>Servings:</label>
			<Input value={servings} type="number" onChange={handleServingsInput} name="servings" />
			<Button htmlType="submit">Create</Button>
		</form>
	)
}
