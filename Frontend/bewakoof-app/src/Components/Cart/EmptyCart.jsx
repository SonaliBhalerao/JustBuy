import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const EmptyCart = () => {
	return (
		<Box>
			<Box w={"200px"} m={"auto"} my={"50px"}>
				<Image src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" />
				<Text mb={"20px"} textAlign="center" fontSize={"20px"}>
					Nothing in the bag
				</Text>
				<Button colorScheme="teal" variant="outline" fontSize={"20px"}>
					Continue Shopping
				</Button>
			</Box>
		</Box>
	);
};

export default EmptyCart;
