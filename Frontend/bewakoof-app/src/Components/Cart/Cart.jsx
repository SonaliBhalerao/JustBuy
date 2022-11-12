import {
	Box,
	Heading,
	HStack,
	Stack,
	Text,
	Image,
	Spacer,
	Button,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { FcNext } from "react-icons/fc";

const CouponDescription = [
	"Whistles! Get extra 10% cashback on all prepaid orders above Rs.499. Use Code - PREP10.",
	"Wohoo! Get a free gift worth Rs.399 on all prepaid orders Use Coupon Code- GETFREEGIFT.",
];

const Cart = () => {
	const [cart, setCart] = useState(1);
	return (
		<Box width={"100%"}>
			<Box width={"85%"} m={"auto"} my={"30px"} height={"600px"}>
				<HStack spacing="5px" pb={"20px"}>
					<Heading fontSize={"17px"}>My Bag</Heading>
					<Text fontSize={"17px"}>{`${cart} item`}</Text>
				</HStack>

				{/* left and right */}

				<Stack spacing={4} direction={["column", "row"]}>
					{/* left box */}
					<Box w={["100%", "60%"]} height="200px">
						<HStack
							px={3}
							py={4}
							bg={"#fcffee"}
							fontSize={"13px"}
							borderRadius="2px"
						>
							<Image
								src="https://images.bewakoof.com/web/Red-truck.png"
								w={"25px"}
							/>
							<Text>Yay! You get FREE delivery on this order</Text>
						</HStack>
					</Box>

					{/* right box */}
					<Box w={["100%", "40%"]} height="200px">
						<HStack p={3} bg={"#fdd835"} borderRadius="5px">
							<Text>Save extra ₹40 with TriBe</Text>
							<Spacer />
							<GrFormNext fontSize={"20px"} />
						</HStack>

						{CouponDescription.map((item) => (
							<Box
								px={3}
								py={1.5}
								border="1px solid rgb(234, 234, 234)"
								borderRadius="5px"
								mt={4}
								lineHeight={"1.4rem"}
							>
								{item}
							</Box>
						))}

						{/* coupon redeem  */}
						<Box
							p={1.5}
							border="1px solid rgb(234, 234, 234)"
							mt={4}
							lineHeight={"1.4rem"}
						>
							<HStack
								px={2.5}
								bg={"rgba(66,162,161,.1)"}
								borderRadius="5px"
								fontSize={"13px"}
								color={"rgba(66,162,161)"}
								as={Button}
								w={"100%"}
							>
								<Text>Have a Coupon / Referral / Gift Card ?</Text>
								<Spacer />
								<Text fontWeight={"bold"}>Redeem</Text>
								<FcNext fontSize={"14px"} />
							</HStack>
						</Box>

						{/* Price summary */}

						<Box
							fontSize={"13px"}
							color={"grey"}
							border="1px solid rgb(234, 234, 234)"
						>
							<Box mb={2} px={5} py={2.5} bg={"rgba(0,0,0,.04)"} w={"100%"}>
								<Text fontWeight={"bold"}>PRICE SUMMARY</Text>
							</Box>

							<HStack px={5} py={1.5} w={"100%"}>
								<Text>Total MRP (Incl. of taxes) </Text>
								<Spacer />
								<Text>₹ 949 </Text>
							</HStack>
							<HStack px={5} py={1.5} w={"100%"}>
								<Text>Shipping Charges </Text>
								<Spacer />
								<Text>FREE</Text>
							</HStack>
							<HStack px={5} py={1.5} w={"100%"}>
								<Text>Bag Discount </Text>
								<Spacer />
								<Text>-₹ 899 </Text>
							</HStack>
							<HStack px={5} py={1.5} w={"100%"}>
								<Text>Subtotal </Text>
								<Spacer />
								<Text>₹ 649 </Text>
							</HStack>
						</Box>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
};

export default Cart;
