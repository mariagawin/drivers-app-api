import React from 'react';
import { NavLink} from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button"

function Header() {
	return (
		<Box sx={{ flexGrow: 1, mb: 4 }}>
			<AppBar position="static">
				<Toolbar>
					<Button
						sx={{ my: 2, color: "white", display: "block" }}
						component={NavLink}
						to="/"> 
						Drivers App
					</Button>
					<Box
					sx={{ 
						flexGrow: 1, 
						display: {xs: "none", md: "flex"},
						justifyContent: "flex-end",
					}}>
						<Button
							sx={{ my: 2, display: "block" }}
							component={NavLink}
							to="/add"
							variant="contained"
							color="secondary">
							Add Driver
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
