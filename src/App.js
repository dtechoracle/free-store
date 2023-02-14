import React from "react";
import './App.css';
import Homepage from "./Components/Homepage/Homepage";
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		// const { DataisLoaded, items } = this.state;
		// if (!DataisLoaded) return <div>
		// 	<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			{/* <h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.title },
					Full_Name: { item.price },
					User_Email: { item.description }
          <img src={item.image} />
					</ol>

				))
			} */}
      <Homepage />
		</div>
	);
}
}

export default App;
