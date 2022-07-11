import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DriverForm from "./../components/forms/DriverForm";

import { DriversContext } from '../context/driver.context';

function UpdateDriver() {
	const { drivers, updateDriver } = useContext(DriversContext);

	const navigate = useNavigate();
	const {id} = useParams();
	
	const driver = drivers.find(({_id}) => _id === id);
	
	const handler = (id, data) => {
		updateDriver(id, data);
		navigate("/");
	};
	
	return (
		<>
			<h1>Update Driver</h1>
			<DriverForm submitHandler={handler} driver={driver} />
		</>
	);
}

export default UpdateDriver;
