import React, { useContext } from 'react';
import DriverForm from '../components/forms/DriverForm';

import { DriversContext } from '../context/driver.context';

function AddDriver() {
	const { addDriver } = useContext(DriversContext);
	return (
		<>
			<h1>Add a Driver</h1>
			<DriverForm submitHandler={addDriver}/>
		</>
	)
}

export default AddDriver
