/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { Container } from "../Main/styles";
import { Format } from "./styles";
import ButtonComponent from "../../components/Buttons/ButtonComponent";


export default function Procedures() {
	const initialProcedures = [
		{ id: 1, name: "Procedimento 1" },
		{ id: 2, name: "Procedimento 2" },
		{ id: 3, name: "Procedimento 3" },
		{ id: 4, name: "Procedimento 4" },
		{ id: 5, name: "Procedimento 5" },
		{ id: 6, name: "Procedimento 6" },
		{ id: 7, name: "Procedimento 7" },
		{ id: 8, name: "Procedimento 8" },
		{ id: 9, name: "Procedimento 9" },
		{ id: 10, name: "Procedimento 10" },
		{ id: 11, name: "Procedimento 11" },
		{ id: 12, name: "Procedimento 12" },
		{ id: 13, name: "Procedimento 13" },
		{ id: 14, name: "Procedimento 14" },
		{ id: 15, name: "Procedimento 15" },
		{ id: 16, name: "Procedimento 16" },
		{ id: 17, name: "Procedimento 17" },
		{ id: 18, name: "Procedimento 18" },
		// Adicione mais procedimentos conforme necessário
	];

	const [procedures] = useState(initialProcedures);
	const [selectedProcedures, setSelectedProcedures] = useState([]);
	const [searchText, setSearchText] = useState('');

  // checks if the checkbox is in the list of selected ones 
	const handleCheckboxChange = (procedure) => {
		setSelectedProcedures((prevSelected) => {
			const procedureId = procedure.id;
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
		// Remova o check do procedimento na div de pesquisa
		const checkbox = document.getElementById(`procedure-${procedureId}`);
		if (checkbox) {
			checkbox.checked = false;
		}
	};

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
							.filter((procedure) => procedure.name.toLowerCase().includes(searchText.toLowerCase()))
							.map((procedure) => (
								<div className="procedure" key={procedure.id}>
									<input
										type="checkbox"
										id={`procedure-${procedure.id}`}
										checked={selectedProcedures.includes(procedure.id)}
										onChange={() => handleCheckboxChange(procedure)}
									/>
									<label htmlFor={`procedure-${procedure.id}`}>{procedure.name}</label>
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
								<div className="procedureSelected">
									<li key={selectedId}>{procedures.find((p) => p.id === selectedId)?.name}</li>
									<submit className="button" onClick={() => handleRemoveButtonClick(selectedId)}>
										<FaTimes id="remove" />
									</submit>
								</div>
							))}
						</ul>
					</div>
				</div>
				<div className="btns">
					<ButtonComponent clickFunction={() => alert("Botão cancelar")} childrenText="Cancelar" background="Red" height="35" width="135" />
					<ButtonComponent clickFunction={() => alert("Botão Salvar")} childrenText="Check-In" background="#83e509" height="35" width="135" />

				</div>

			</Format>
		</Container>
	);
}
