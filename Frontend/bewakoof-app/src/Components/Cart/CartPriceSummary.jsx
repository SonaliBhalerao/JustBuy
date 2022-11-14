import { HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const CartPriceSummary = ({ data }) => {
	return (
		<>
			{data.map((item, i) => (
				<HStack px={5} py={1.5} w={"100%"}>
					<Text>{item.left} </Text>
					<Spacer />

					{i === 1 ? <Text>{item.right} </Text> : <Text>₹ {item.right} </Text>}
				</HStack>
			))}
		</>
	);
};

export default CartPriceSummary;
