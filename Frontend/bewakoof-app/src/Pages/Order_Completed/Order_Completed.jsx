import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Order_Completed = () => {
	return (
		<Box w={"100%"}>
			<Box w={"50%"} m={"auto auto"}>
				<Image src="https://www.knowband.com/blog/wp-content/uploads/2020/03/THANKYOU-PAGE-2.png" />
				<Box w={"200px"} m={"30px auto"}>
					<Link to={"/"}>
						<Button colorScheme={"teal"}>Continue Shopping</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default Order_Completed;
