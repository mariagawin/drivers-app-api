import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";

const schema = yup.object().shape({
	firstname: yup.string().max(30).required(),
	lastname: yup.string().max(30).required(),
	age: yup.number().integer().max(5000).required(),
	avatar_url: yup.string(),
	email: yup.string(),
});

const defaults = {
	firstname: "",
	lasttname: "",
	age: "",
	avatar_url: "",
	email: "",
};

export default function DriverForm({ driver, submitHandler }) {
	console.log({ driver });

	const {
		handleSubmit,
		formState: { errors, isValid, isDirty, isSubmitting },
		reset,
		control,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues: driver || defaults,
	});

	useEffect(() => {
		reset(driver);
	}, [driver, reset]);

	const formRowStyle = {
		marginBlockEnd: "1em",
	};

	let submitFn = (vals) => {
		reset();
		driver ? submitHandler(driver._id, vals) : submitHandler(vals);
	};

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(submitFn)}>
			<div style={formRowStyle}>
			<Controller
				control={control}
				name="firstname"
				defaultValue={""}
				render={({ field }) => (
					<TextField
					type="text"
					fullWidth
					error={!!errors.firstname}
					{...field}
					label="First name"
					helperText={errors.firstname?.message}
					/>
				)}
			/>
			</div>

			<div style={formRowStyle}>
			<Controller
				control={control}
				name="lastname"
				defaultValue={""}
				render={({ field }) => (
					<TextField
					type="text"
					fullWidth
					error={!!errors.lastname}
					{...field}
					label="Last name"
					helperText={errors.lastname?.message}
					/>
				)}
			/>
			</div>

			<div style={formRowStyle}>
			<Controller
				control={control}
				name="email"
				defaultValue={""}
				render={({ field }) => (
					<TextField
					type="text"
					fullWidth
					error={!!errors.email}
					{...field}
					label="Email"
					helperText={errors.email?.message}
					/>
				)}
			/>
			</div>

			<div style={formRowStyle}>
			<Controller
				control={control}
				name="age"
				defaultValue={""}
				render={({ field }) => (
					<TextField
					type="number"
					fullWidth
					error={!!errors.age}
					{...field}
					label="Age"
					pattern={/[0-9]{1,4}/}
					helperText={errors.age?.message}
					/>
				)}
			/>
			</div>

			<div style={formRowStyle}>
			<Controller
				control={control}
				name="avatar_url"
				defaultValue={""}
				render={({ field }) => (
					<TextField
					fullWidth
					type="text"
					error={!!errors.avatar_url}
					{...field}
					label="Avatar URL"
					helperText={errors.avatar_url?.message}
					/>
				)}
			/>
			</div>

			<div style={{ marginTop: 20 }}>
			<Button
				type="reset"
				onClick={() => reset()}
				variant="contained"
				sx={{ mr: 2 }}
				disabled={!isDirty}
			>
				Reset
			</Button>
			<Button
				type="submit"
				primary="true"
				variant="contained"
				disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
			>
				Submit
			</Button>
			</div>
		</form>
	);
}
