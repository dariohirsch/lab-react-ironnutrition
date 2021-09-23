import { Input, Divider } from "antd"
import { useState } from "react"

function Search(props) {
	// const [filteredName, setFilteredName] = useState("")

	const handleSearchInput = (e) => {
		// props.setTextSearch(e.target.value)
		props.searchFood(e.target.value)
	}

	return (
		<>
			<label>Search:</label>
			<Input type="text" onChange={handleSearchInput} />
		</>
	)
}

export default Search
