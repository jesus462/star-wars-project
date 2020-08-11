import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Navbar, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.div`
	.dropdown-menu {
		text-align: center;
	}
`;

export const NavBar = ({ counter, setCounter, setFavoritesArray, favoritesArray }) => {
	const { store, actions } = useContext(Context);
	const [clicked, setClicked] = useState(false);

	const handleClose = () => setClicked(false);
	const handleShow = () => setClicked(true);

	let mappedFavorites = favoritesArray.map(favorite => {
		const deleteFavorite = () => {
			let filterDeleteFavorite = store.favorites.filter(deleteFavorite => {
				return favorite.name != deleteFavorite.name;
			});
			setFavoritesArray(filterDeleteFavorite);
			setCounter((counter -= 1));
			store.favorites = filterDeleteFavorite;
		};

		return (
			<Dropdown.Item onClick={deleteFavorite} key={favorite.url}>
				{favorite.name} <i className="fas fa-trash" />
			</Dropdown.Item>
		);
	});

	return (
		<Styles>
			<Navbar>
				<Navbar.Brand>STAR WARS</Navbar.Brand>
				<Dropdown show={clicked}>
					<Dropdown.Toggle
						onClick={!clicked ? handleShow : handleClose}
						variant="primary"
						id="dropdown-basic">
						Favorites {counter}
					</Dropdown.Toggle>
					<Dropdown.Menu>{mappedFavorites.length > 0 ? mappedFavorites : "(Empty)"}</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		</Styles>
	);
};

NavBar.propTypes = {
	counter: PropTypes.number,
	setCounter: PropTypes.number,
	setFavoritesArray: PropTypes.array,
	favoritesArray: PropTypes.array
};
