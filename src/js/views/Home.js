import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import styled from "styled-components";

import { InfoCard } from "../component/InfoCard";
import { NavBar } from "../component/NavBar";

const FullContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const CardsContainer = styled.div`
	display: inline-flexbox;
	width: 90%;
	overflow-x: scroll;
	border: 1px solid black;
	margin: 10px 0;
	padding: 5px;
`;

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [counter, setCounter] = useState(0);
	const [favoritesArray, setFavoritesArray] = useState([]);

	let mappedPeople = store.people.map(person => {
		return (
			<InfoCard
				favoritesArray={favoritesArray}
				setFavoritesArray={setFavoritesArray}
				counter={counter}
				setCounter={setCounter}
				key={person.url}
				person={person}
			/>
		);
	});

	let mappedPlanets = store.planets.map(planet => {
		return (
			<InfoCard
				favoritesArray={favoritesArray}
				setFavoritesArray={setFavoritesArray}
				counter={counter}
				setCounter={setCounter}
				key={planet.url}
				planet={planet}
			/>
		);
	});

	return (
		<FullContainer>
			<NavBar
				favoritesArray={favoritesArray}
				setFavoritesArray={setFavoritesArray}
				counter={counter}
				setCounter={setCounter}
			/>
			<CardsContainer>{mappedPeople}</CardsContainer>
			<CardsContainer>{mappedPlanets}</CardsContainer>
		</FullContainer>
	);
};
