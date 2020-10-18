import React from 'react';

const BuyGeneratorButtons = (props) => {
	const updatePerSecond = () => {
		const totalPerSecond = props.generators[1]
		props.setPerSecond(totalPerSecond)
	}
	
	const increaseGenerator = (type, amount) => {
		if (type === 1) {
			if (props.coins >= 10*amount){
			props.setCoins (props.coins - 10*amount)
			props.setGenerators ({...props.generators, 1:props.generators[1]+amount})
			updatePerSecond()
			}
		}
	}
	
	return (
		<>
		<br/>
			<button onClick = {() => increaseGenerator(1,props.buyAmount)}>
				Buy Generator ({props.generators[1]})
				<br/>
				Cost: 10
			</button>
		</>
	)
}

export default BuyGeneratorButtons