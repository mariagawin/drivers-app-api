import React, { useContext, useEffect } from 'react';

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { DriversContext } from '../context/driver.context';

function Home() {
	const { fetchDrivers, deleteDriver, loading, drivers } = useContext(DriversContext);

	useEffect(() => {
		fetchDrivers();
	}, [fetchDrivers]);

	if (loading) return <p>Loading.....</p>

	return (
		<ul>
			<Box>
				<List>
					{drivers.map(({ _id, firstname, lastname, age, email, avatar_url}, i) => (
						<ListItem key={i}>
							<ListItemAvatar>
								<Avatar alt="" src={avatar_url} />
							</ListItemAvatar>
							<ListItemText>
								{firstname} {lastname} ({age} | {email})
							</ListItemText>
							<IconButton
								aria-label="update"
								to={`/update/${_id}`}
								component={Link}>
								<EditIcon />
							</IconButton>
							<IconButton aria-label="delete" onClick={() => deleteDriver(_id)}>
								<DeleteIcon />
							</IconButton>
						</ListItem>
					))}
				</List>
			</Box>
		</ul>
	)
}

export default Home
