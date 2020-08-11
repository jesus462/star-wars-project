import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

export const InfoModal = ({ show, handleClose, person, planet }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{person === undefined ? planet.name : person.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{person === undefined ? "Population: " + planet.population : "Birth year: " + person.birth_year}
			</Modal.Body>
			<Modal.Body>
				{person === undefined ? "Terrain: " + planet.terrain : "Eye color: " + person.eye_color}
			</Modal.Body>
			<Modal.Body>
				{person === undefined ? "Climate: " + planet.climate : "Hair color: " + person.hair_color}
			</Modal.Body>
			<Modal.Body>
				{person === undefined ? "Diameter: " + planet.diameter : "Gender: " + person.gender}
			</Modal.Body>
			<Modal.Body>{person === undefined ? "Gravity: " + planet.gravity : "Height: " + person.height}</Modal.Body>
			<Modal.Body>
				{person === undefined ? "orbital period: " + planet.orbital_period : "Mass: " + person.mass}
			</Modal.Body>
			<Modal.Body>
				{person === undefined ? "Surface water: " + planet.surface_water : "Skin color: " + person.skin_color}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

InfoModal.propTypes = {
	person: PropTypes.object,
	planet: PropTypes.object,
	handleClose: PropTypes.func,
	show: PropTypes.bool
};
