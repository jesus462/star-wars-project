import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

import { InfoModal } from "./InfoModal";

const StyledCard = styled(Card)`
	width: 200px;
	font-size: 13px;
`;

const StyledButton = styled(Button)`
	margin: 0 5px;
	color: ${props => (props.primary ? "#007bff" : "#ffc107")};
	background-color: white;
`;

export const InfoCard = ({ person, planet, setCounter, counter, setFavoritesArray }) => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const [favorite, setFavorite] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let checkFavorite = store.favorites.filter(favorite => {
		if (person === undefined) {
			return favorite.name === planet.name;
		} else {
			return favorite.name === person.name;
		}
	});

	const addFavorite = () => {
		if (!favorite || checkFavorite.length === 0) {
			store.favorites.push(person === undefined ? planet : person);
			setFavoritesArray(store.favorites);
			setFavorite(true);
			setCounter((counter += 1));
			console.log(store.favorites);
		} else {
			setFavorite(false);
			setCounter((counter -= 1));
			let filterFavorite = store.favorites.filter(favorite => {
				if (person === undefined) {
					return favorite.name != planet.name;
				} else {
					return favorite.name != person.name;
				}
			});
			setFavoritesArray(filterFavorite);
			store.favorites = filterFavorite;
			console.log(store.favorites);
		}
	};

	return (
		<StyledCard>
			<Card.Body>
				<Card.Title>{person === undefined ? planet.name : person.name}</Card.Title>
				<Card.Text>
					{person === undefined ? "Population: " + planet.population : "Gender: " + person.gender}
				</Card.Text>
				<Card.Text>
					{person === undefined ? "Terrain: " + planet.terrain : "Hair Color: " + person.hair_color}
				</Card.Text>
				<Card.Text>
					{person === undefined ? "Climate: " + planet.climate : "Eye Color: " + person.eye_color}
				</Card.Text>
				<StyledButton variant="primary" primary onClick={handleShow}>
					<i className="fas fa-search" />
				</StyledButton>
				<InfoModal handleClose={handleClose} show={show} person={person} planet={planet} />
				<StyledButton variant="warning" onClick={addFavorite}>
					{favorite && checkFavorite.length > 0 ? (
						<i className="fas fa-heart" />
					) : (
						<i className="far fa-heart" />
					)}
				</StyledButton>
			</Card.Body>
		</StyledCard>
	);
};

InfoCard.propTypes = {
	person: PropTypes.object,
	planet: PropTypes.object,
	setCounter: PropTypes.number,
	counter: PropTypes.number,
	setFavoritesArray: PropTypes.array
};
