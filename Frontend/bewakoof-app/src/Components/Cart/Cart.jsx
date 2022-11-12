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
import CartProductCard from "./CartProductCard";

const CouponDescription = [
	"Whistles! Get extra 10% cashback on all prepaid orders above Rs.499. Use Code - PREP10.",
	"Wohoo! Get a free gift worth Rs.399 on all prepaid orders Use Coupon Code- GETFREEGIFT.",
];

const cart = [
	{
		productName: "Men's Black Moon Knigh Typography Oversized T-Shirt",
		price: 649,
		savedMessage: "You saved ₹300!",
		size: "L",
		Qty: 1,
		image:
			"https://images.bewakoof.com/t320/men-s-black-moon-knigh-typography-oversized-t-shirt-522527-1667510529-1.jpg",
	},

	{
		productName: "Men's Black Moon Knigh Typography Oversized T-Shirt",
		price: 649,
		savedMessage: "You saved ₹300!",
		size: "L",
		Qty: 1,
		image:
			"https://images.bewakoof.com/t320/men-s-black-moon-knigh-typography-oversized-t-shirt-522527-1667510529-1.jpg",
	},

	{
		productName: "Men's Black Moon Knigh Typography Oversized T-Shirt",
		price: 649,
		savedMessage: "You saved ₹300!",
		size: "L",
		Qty: 1,
		image:
			"https://images.bewakoof.com/t320/men-s-black-moon-knigh-typography-oversized-t-shirt-522527-1667510529-1.jpg",
	},

	{
		productName: "Men's Black Moon Knigh Typography Oversized T-Shirt",
		price: 649,
		savedMessage: "You saved ₹300!",
		size: "L",
		Qty: 1,
		image:
			"https://images.bewakoof.com/t320/men-s-black-moon-knigh-typography-oversized-t-shirt-522527-1667510529-1.jpg",
	},
];

const Cart = () => {
	return (
		<Box width={"100%"}>
			<Box width={"85%"} m={"auto"} my={"30px"} mb="60px">
				<HStack spacing="5px" pb={"20px"}>
					<Heading fontSize={"17px"}>My Bag</Heading>

					{/* cart.length - no of items in the cart */}
					<Text fontSize={"17px"}>{`${cart.length} item`}</Text>
				</HStack>

				{/* left and right */}

				<Stack spacing={4} direction={["column", "row"]}>
					{/* left box */}
					<Box w={["100%", "60%"]}>
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

						{/* products */}

						{cart.map((item) => (
							<CartProductCard {...item} />
						))}
					</Box>

					{/* right box */}
					<Box w={["100%", "40%"]}>
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
							<Box mt={2} px={5}>
								<Box
									mb={10}
									px={5}
									py={1}
									bg={"rgb(29, 136, 2,.15)"}
									color={"rgb(29, 136, 2)"}
									w={"100%"}
									borderRadius={"15px"}
								>
									<Text>You are saving ₹ 300 on this order</Text>
								</Box>
							</Box>
						</Box>

						{/* total and Add address */}

						{/* coupon redeem  */}
						<Box
							p={1.5}
							border="1px solid rgb(234, 234, 234)"
							lineHeight={"1.2rem"}
						>
							<HStack
								px={2.5}
								borderRadius="5px"
								fontSize={"13px"}
								w={"100%"}
								py={2}
							>
								<Box w={"20%"}>
									<Text fontWeight={"bold"}>Total</Text>
									<Text fontSize={"17px"}>₹ 649</Text>
								</Box>
								<Spacer />
								<Button
									width={"60%"}
									p={6}
									fontSize={"18px"}
									colorScheme="teal"
								>
									ADD ADDRESS
								</Button>
							</HStack>
						</Box>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
};

export default Cart;
