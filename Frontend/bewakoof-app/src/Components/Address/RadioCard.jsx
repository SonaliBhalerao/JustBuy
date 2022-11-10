import { Box, useRadio } from "@chakra-ui/react";
import React from "react";

const RadioCard = (props) => {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				cursor="pointer"
				borderWidth="1px"
				borderRadius="15px"
				mr={2}
				_checked={{
					bg: "white",
					color: "teal.600",
					borderColor: "teal.600",
				}}
				_focus={{
					boxShadow: "outline",
				}}
				px={4}
				py={0.5}
			>
				{props.children}
			</Box>
		</Box>
	);
};

export default RadioCard;
