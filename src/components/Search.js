import { Input } from "antd"
import { useState } from "react"

function Search(props) {
	const [textSearch, setTextSearch] = useState("")

	const handleSearchInput = (e) => {
		console.log(props.foodList)
		// setTextSearch(e.target.value)
		// console.log(textSearch)
	}

	// function filter(e) {
	// 	console.log(e)
	// }

	return (
		<>
			<label>Search:</label>
			<Input value={textSearch} type="text" onChange={handleSearchInput} />
		</>
	)
}

export default Search
