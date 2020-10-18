import React, { useState, useEffect } from 'react';
import './App.css';
import BuyAmountButtons from './components/BuyAmountButtons'
import BuyGeneratorButtons from './components/BuyGeneratorButtons'

const App = () => {
	const [ coins, setCoins ] = useState(0)
	const [ generators, setGenerators ] = useState ({
		1:0,
		10:0,
		100:0,
	})
	const [ perSecond, setPerSecond ] = useState (0)
	const [ buyAmount, setBuyAmount ] = useState (1)
	
	useEffect (() => {
		const totalPerSecond = generators[1]
		setPerSecond(totalPerSecond)
	}, [generators])
	
	useEffect (() => {
		const interval = setInterval (() => {
			setCoins(coins => coins + perSecond)
		}, 1000)
		return () => clearInterval(interval)
	}, [perSecond])

  return (
	<div id="wrapper">
    <div id="header" className ="center">
			<h1>
				{coins}
			</h1>
			<p>
				Per Second: {perSecond}
			</p>
    </div>
		<div id="body" className ="center">
			<button onClick = {() => setCoins (coins + 1)}>
				Click
			</button>
			<BuyAmountButtons setBuyAmount={setBuyAmount}/>
			<BuyGeneratorButtons generators={generators} setGenerators={setGenerators} 
				coins={coins} setCoins={setCoins} 
				setPerSecond={setPerSecond}
				buyAmount={buyAmount}/>
		</div>
	</div>
  );
}

export default App;
