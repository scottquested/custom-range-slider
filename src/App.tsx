import "./App.scss";
import RangeSlider from "./components/RangeSlider/";

function App() {
	const onChange = (value: number) => {
		console.log("onChange", value);
	};
	return (
		<div>
			<h1>RangeSlider</h1>
			<RangeSlider
				min={0}
				max={100}
				onChange={onChange}
				initialValue={45}
				withLabel
			/>
		</div>
	);
}

export default App;
