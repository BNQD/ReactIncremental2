import React, { useState } from 'react';

const BuyAmountButtons = (props) => {
	const [ buyButtonsClass, setBuyButtonsClass ] = useState ({
		'oneBuyClass':'buyAmountSelectorSelected',
		'tenBuyClass':'buyAmountSelectorUnselected',
		'hundredBuyClass':'buyAmountSelectorUnselected'
	})


	const selectBuyAmount = (amount) => {
		switch(amount){
			case 1:
				setBuyButtonsClass({
					'oneBuyClass':'buyAmountSelectorSelected',
					'tenBuyClass':'buyAmountSelectorUnselected',
					'hundredBuyClass':'buyAmountSelectorUnselected'
				})
				props.setBuyAmount(1)
				break;
			case 10:
				setBuyButtonsClass({
					'oneBuyClass':'buyAmountSelectorUnselected',
					'tenBuyClass':'buyAmountSelectorSelected',
					'hundredBuyClass':'buyAmountSelectorUnselected'
				})
				props.setBuyAmount(10)
				break;
			case 100:
				setBuyButtonsClass({
					'oneBuyClass':'buyAmountSelectorUnselected',
					'tenBuyClass':'buyAmountSelectorUnselected',
					'hundredBuyClass':'buyAmountSelectorSelected'
				})
				props.setBuyAmount(100)
				break;
			default:
				throw new Error('selectBuyAmount Error')
		}
	}
	
	return (
		<>
			<br/>
			<button className={buyButtonsClass['oneBuyClass']} onClick={() => selectBuyAmount(1)}> 1 </button>
			<button className={buyButtonsClass['tenBuyClass']} onClick={() => selectBuyAmount(10)}> 10 </button>
			<button className={buyButtonsClass['hundredBuyClass']} onClick={() => selectBuyAmount(100)}> 100 </button>
		</>
	)
}

export default BuyAmountButtons