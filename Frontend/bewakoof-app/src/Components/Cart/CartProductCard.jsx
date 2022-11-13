import { Box, Button, HStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const CartProductCard = ({
	description,
	finalprice,
	strickprice,
	size,
	Qty,
	productImg,
}) => {
	const dispatch = useDispatch();

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const saved = Number(strickprice) - Number(finalprice);

	return (
		<Box border="1px solid rgb(234, 234, 234)" borderRadius={"5px"} mt={5}>
			<HStack
				mx={3}
				lineHeight={["1.4rem", "1.6rem"]}
				spacing={"20px"}
				py={5}
				borderBottom="1px solid rgb(234, 234, 234)"
				pr={3}
			>
				<Box width={["60%", "80%"]} mx={3} mt={["0.1rem", "-20px"]}>
					<Text
						lineHeight={["1rem", "1.6rem"]}
						fontSize={["13px", "15px"]}
						color="gray"
					>
						{description}
					</Text>
					<HStack mt={["1rem", "0.1rem"]}>
						<Text fontSize={"18px"} fontWeight="bold">
							₹ {finalprice}
						</Text>
						<Text fontSize={"14px"} color="gray" as="del">
							₹{strickprice}
						</Text>
					</HStack>
					<Text color={"#1d8802"} fontSize={["13px", "15px"]}>
						{`You saved ₹${saved}!`}
					</Text>
					<HStack spacing={"20px"} mt={5}>
						<Button
							rightIcon={<FiChevronDown />}
							colorScheme="gray"
							variant="outline"
							height={"30px"}
							px={"10px"}
						>
							Size : {size}
						</Button>

						<Button
							rightIcon={<FiChevronDown />}
							colorScheme="gray"
							variant="outline"
							height={"30px"}
							px={"10px"}
						>
							Qty : {Qty}
						</Button>
					</HStack>
				</Box>

				{/* image box */}
				<Box width={["40%", "20%"]}>
					<Image mt={["-1rem", "0rem"]} borderRadius="6px" src={productImg} />
				</Box>
			</HStack>

			{/* Remove and Move to wishlist buttons */}
			<HStack>
				<Button
					variant="ghost"
					borderRadius={0}
					w={"40%"}
					color="gray"
					borderRight={"1px solid rgb(234, 234, 234)"}
					py={6}
					_hover={{ bg: "none" }}
					onClick={() => removeFromCart(item.product)}
				>
					Remove
				</Button>

				<Button
					py={6}
					variant="ghost"
					borderRadius={0}
					w={"60%"}
					color="gray"
					_hover={{ bg: "none" }}
				>
					Move to Wishlist
				</Button>
			</HStack>
		</Box>
	);
};

export default CartProductCard;
