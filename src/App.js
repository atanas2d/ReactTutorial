import React from "react";
import "./App.css";
import Counter from "./Components/Counter"
import Greet from "./Components/Greet"
import Welcome from "./Components/Welcome"
import Message from "./Components/Message"
import FunctionClick from "./Components/FunctionClick"
import ClickClass from "./Components/ClickClass"
import EventBind from "./Components/EventBind"

function App() {
	return (
		<div className="App">
			{/* <Greet name="Lubka" heroName="The Cat woman" /> */}
			{/* <NameList /> */}
            {/* <Hello/> */}
            {/* <Message/> */}
            {/* <Counter incrementNumber={1} /> */}
            {/* <Greet name= "Nasko" heroName="SuperMan" /> */}
            {/* <Welcome name= "Nasko" heroName="SuperMan" /> */}
            {/* <FunctionClick /> */}
            {/* <ClickClass /> */}
            <EventBind />
		</div>
	);
}

export default App;
