import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BestSellerForWomen } from "../../Components/womens_page/BestSellerForWomen/BestSellerForWomen";
import { ClearenceZoneWomen } from "../../Components/womens_page/clearenceZoneWomen/ClearenceZoneWomen";
import { WomensPopularcategories } from "../../Components/womens_page/popular_categories/WomensPopularcategories";
import { TheStupidCollectionWomen } from "../../Components/womens_page/TheStupidCollectionWomens/TheStupidCollectionWomen";
import { WomensCarousel } from "../../Components/womens_page/WomensCarousel";
import { WomensSmallCarousel } from "../../Components/womens_page/WomensSmallCarousel";
import { WomensDiscountPeDiscount } from "../../Components/womens_page/Womens_Discount_Pe_Discount/WomensDiscountPeDiscount";

export const WomensHomePage = () => {
	return (
		<Box>
			<WomensCarousel />

			<Box py={"20px"}>
				<Image
					width={"100%"}
					src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg"
				/>
			</Box>

			<WomensSmallCarousel />

			<Box py={"20px"}>
				<Image
					width={"100%"}
					src="https://images.bewakoof.com/uploads/grid/app/thun-strip-new-2022-desksite-1667998280.jpg"
				/>
			</Box>

			<Text
				margin={"auto"}
				textAlign={"center"}
				fontFamily={"Montserrat"}
				fontWeight={600}
				fontSize={{ base:'16px', sm: '16px', md: '18px', lg: '20px', xl:' 24px', '2xl': '26px'}}
				textDecoration={"underline"}
				my={"10px"}
			>
				POPULAR CATEGORIES
			</Text>
			<WomensPopularcategories />

			<Text
				margin={"auto"}
				textAlign={"center"}
				fontFamily={"Montserrat"}
				fontWeight={600}
				fontSize={{ base:'16px', sm: '16px', md: '18px', lg: '20px', xl:' 24px', '2xl': '26px'}}
				textDecoration={"underline"}
				mb={"10px"}
			>
				DISCOUNT PE DISCOUNT
			</Text>
			<WomensDiscountPeDiscount />

			<Text
				margin={"auto"}
				textAlign={"center"}
				fontFamily={"Montserrat"}
				fontWeight={600}
				fontSize={{ base:'16px', sm: '16px', md: '18px', lg: '20px', xl:' 24px', '2xl': '26px'}}
				textDecoration={"underline"}
				my={"10px"}
			>
				BEST SELLER FOR WOMEN
			</Text>
			<BestSellerForWomen />

			<Box display={"flex"} gap={"20px"} py={"20px"}>
				<Box>
					<img
						src="https://images.bewakoof.com/uploads/grid/app/snazzy-printed-joggers-1x1-m-1667802359.jpg"
						alt=""
						srcset=""
					/>
				</Box>
				<Box>
					<img
						src="https://images.bewakoof.com/uploads/grid/app/Flatknit-sweater-1x1-w-1667910223.jpg"
						alt=""
						srcset=""
					/>
				</Box>
				<Box>
					<img
						src="https://images.bewakoof.com/uploads/grid/app/buy2get1free-1x1--1--1667459090.jpg"
						alt=""
						srcset=""
					/>
				</Box>
			</Box>

			<Text
				margin={"auto"}
				textAlign={"center"}
				fontFamily={"Montserrat"}
				fontWeight={600}
				fontSize={{ base:'16px', sm: '16px', md: '18px', lg: '20px', xl:' 24px', '2xl': '26px'}}
				textDecoration={"underline"}
				my={"10px"}
			>
				CLEARANCE ZONE
			</Text>
			<ClearenceZoneWomen />

			<Text
				margin={"auto"}
				textAlign={"center"}
				fontFamily={"Montserrat"}
				fontWeight={600}
				fontSize={{ base:'16px', sm: '16px', md: '18px', lg: '20px', xl:' 24px', '2xl': '26px'}}
				textDecoration={"underline"}
				my={"10px"}
			>
				THE STOOPID COLLECTION
			</Text>
			<TheStupidCollectionWomen />

			<Box py={"10px"}>
				<Image
					width={"100%"}
					src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png"
				/>
			</Box>

			<Box py={"10px"}>
				<Image
					width={"100%"}
					src="https://images.bewakoof.com/uploads/grid/app/VoteForDesign-ThinStrip-Desktop-Revised-1667372740.gif"
				/>
			</Box>
		</Box>
	);
};
