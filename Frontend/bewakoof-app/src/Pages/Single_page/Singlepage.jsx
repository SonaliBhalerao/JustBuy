import SingleProductImg from "../../Components/Single_Product/ProductImg"
import SingleProductDetial from "../../Components/Single_Product/ProductsDetails"
import { Container, Flex } from "@chakra-ui/react";

export const SinglePage = () => {
	return (
		<Container
			height={{ base: "auto", lg: "580px" }}
			maxW={{ base: "100%", md: "90%", lg: "75%" }}
			marginTop={"10px"}
		>
			<Flex maxW={"100%"} direction={{ base: "column", lg: "row" }}>
				<SingleProductImg />
				<SingleProductDetial />
			</Flex>
		</Container>
	);
};
