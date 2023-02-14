import React from "react";
class Shop extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://fakestoreapi.com/products?limit=4")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Initializing products </h1> </div> ;

		return (
            <div className = "App">
            {
                        <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Hot deals</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={item.image}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Yello</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
                    }
		</div>
	);
}
}

export default Shop;
