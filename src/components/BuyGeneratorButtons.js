import React from 'react';

const BuyGeneratorButtons = (props) => {	
	const updatePerSecond = () => {
		const totalPerSecond = props.generators[1]
		props.setPerSecond(totalPerSecond)
	}
	
	const genOneTotalCost = (type, amount) => {
		const current_gen_num = props.generators[type]
		
		const genOneCost = (number) => {
			return Math.pow(10, 1+0.05*number)
		}
		if (amount === 1){
			return Math.round(genOneCost(current_gen_num))
		} else {
			return Math.round([...Array(amount).keys()].map(x => genOneCost(x+current_gen_num)).reduce((total, x) => total + x))
		}
		
	}
	
	const increaseGenerator = (type, amount) => {	
		if (type === 1) {
			if (amount !== 1){
				//Get total cost of increase gen[type] by amount
				const gen_total_cost = genOneTotalCost(type, amount)
			}
			else {
				const gen_total_cost = genOneTotalCost(type, amount)
				if (props.coins >= gen_total_cost){
						props.setCoins (props.coins - gen_total_cost)
						props.setGenerators ({...props.generators, 1:props.generators[1]+1})
						updatePerSecond()
				}
			}
		}
		
	}
	
	return (
		<>
		<br/>
			<button onClick = {() => increaseGenerator(1,props.buyAmount)}>
				Buy Generator ({props.generators[1]})
				<br/>
				Cost: {genOneTotalCost(1, props.buyAmount)}
			</button>
		</>
	)
}

export default BuyGeneratorButtons