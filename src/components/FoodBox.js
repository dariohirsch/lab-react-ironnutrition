import { Card, Col, Button } from "antd"

export function FoodBox(props) {
	// console.log(props.foodList)
	return (
		<Col>
			<Card title={props.food.name} style={{ width: 230, height: 300, margin: 10 }}>
				<img src={props.food.image} height={60} alt="" />
				<p>{props.food.calories}</p>
				<p>{props.food.servings}</p>
				<p>
					<b>{props.food.calories * props.food.servings}</b> kcal
				</p>
				<Button type="primary"> Delete </Button>
			</Card>
		</Col>
	)
}
