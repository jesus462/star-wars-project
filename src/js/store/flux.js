const getState = ({ getStore, getActions, setStore }) => {
	const SWAPIurl = "https://swapi.dev/api/";

	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchPeople: async () => {
				let resources = [];
				try {
					let response = await fetch(SWAPIurl + "people/", {
						headers: {
							"Content-Type": "application/JSON"
						},
						method: "GET"
					});
					if (response.ok) {
						let JSONresponse = await response.json();
						resources = JSONresponse.results;
						console.log(resources);
					} else {
						console.log(response.status);
					}
				} catch (err) {
					console.log(err);
				}

				setStore({
					people: resources
				});
			},
			fetchPlanets: async () => {
				let resources = [];
				try {
					let response = await fetch(SWAPIurl + "planets/", {
						headers: {
							"Content-Type": "application/JSON"
						},
						method: "GET"
					});
					if (response.ok) {
						let JSONresponse = await response.json();
						resources = JSONresponse.results;
						console.log("All good");
					} else {
						console.log(response.status);
					}
				} catch (err) {
					console.log(err);
				}

				setStore({
					planets: resources
				});
			}
		}
	};
};

export default getState;
