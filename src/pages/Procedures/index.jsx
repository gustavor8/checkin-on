/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import { Container } from "../../styles/Container";
import { Format } from "./styles";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import api from "../../services/api"


export default function Procedures() {

	const navigate = useNavigate();
	const [procedures, setProcedures] = useState([]);
	const [selectedProcedures, setSelectedProcedures] = useState([]);
	const [searchText, setSearchText] = useState('');
	

	const testProcedures = [
		{ _id: 1, nameProcedure: "Procedimento 1" },
		{ _id: 2, nameProcedure: "Procedimento 2" },
		{ _id: 3, nameProcedure: "Procedimento 3" },
		{ _id: 4, nameProcedure: "Procedimento 4" },
		{ _id: 5, nameProcedure: "Procedimento 5" },
		// Adicione mais procedimentos conforme necessário
	];

	// Load initial Procedures of db
	useEffect(() => {
		async function getAllProcedures() {
			try {
				const response = await api.get('/procedures');
				setProcedures(response.data);
				
			} catch (error) {
				// load test procedures
				setProcedures(testProcedures);
				// eslint-disable-next-line no-alert, prefer-template
				alert(`Erro ao acessar o banco de dados, os dados carregados foram os de teste:\n${error.response?.data?.message || error.message}`);
				
			}
		}

		getAllProcedures();
	}, []);

	// load test
	

	// checks if the checkbox is in the list of selected ones 
	const handleCheckboxChange = (procedure) => {
		setSelectedProcedures((prevSelected) => {
			const procedureId = procedure._id;
			if (prevSelected.includes(procedureId)) {
				return prevSelected.filter((id) => id !== procedureId);
			}
			return [...prevSelected, procedureId];
		});
	};

	// Remove the procedure and checked in search
	const handleRemoveButtonClick = (procedureId) => {
		setSelectedProcedures((prevSelected) =>
			prevSelected.filter((id) => id !== procedureId)
		);

		// Remove check procedure div 
		const checkbox = document.getElementById(`procedure-${procedureId}`);
		if (checkbox) {
			checkbox.checked = false;
		}
	};

	// Check if there are selected procedures to proceed to the status page
	const isProcedureSelected = () => {
		if (selectedProcedures.length > 0) {
			navigate("../Status", { replace: true, state: { selectedProcedures } });

		} else (alert("Nenhum procedimento selecionado!\nSelecione pelo menos um e tente novamente!!"));
	}


	return (
		<Container>
			<Format>
				<div className="search">
					<div className="title" id="title-top">
						<b>SELECIONE OS PROCEDIMENTOS:</b>
					</div>
					<input
						type="text"
						id="searchProcedures"
						placeholder="Busque o procedimento..."
						value={searchText}
						onChange={(event) => setSearchText(event.target.value)}
					/>
					<div className="resultSearch">
						{procedures
							.filter((procedure) => procedure.nameProcedure.toLowerCase().includes(searchText.toLowerCase()))
							.map((procedure) => (
								<div className="procedure" key={procedure._id}>
									<input
										type="checkbox"
										id={`procedure-${procedure._id}`}
										checked={selectedProcedures.includes(procedure._id)}
										onChange={() => handleCheckboxChange(procedure)}
									/>
									<label htmlFor={`procedure-${procedure._id}`}>{procedure.nameProcedure}</label>
								</div>
							))
						}
					</div>
				</div>
				<div className="proceduresSelected">
					<div className="title" id="title-bottom">
						<b>PROCEDIMENTOS SELECIONADOS:</b>
					</div>
					<div className="procedureOnSelect">
						<ul>
							{selectedProcedures.map((selectedId) => (
								<div className="procedureSelected" key={selectedId}>
									<li key={selectedId}>{procedures.find((p) => p._id === selectedId)?.nameProcedure}</li>
									<button className="button" onClick={() => handleRemoveButtonClick(selectedId)} type="button">
										<FaTimes id="remove" />
									</button>
								</div>
							))}
						</ul>
					</div>
				</div>
				<div className="btns">
					<ButtonComponent clickFunction={() => alert("Botão cancelar")} childrenText="Cancelar" background="Red" height="35" width="135" />
					<ButtonComponent clickFunction={isProcedureSelected} childrenText="Check-In" background="#83e509" height="35" width="135" />

				</div>
			</Format>
		</Container>
	);
}
