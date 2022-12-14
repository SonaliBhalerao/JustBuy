import React from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Box,
	VStack,
	Divider,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const CartQuantityButton = ({ qty }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box>
			<Button
				rightIcon={<FiChevronDown />}
				colorScheme="gray"
				variant="outline"
				height={"30px"}
				px={"10px"}
				onClick={onOpen}
			>
				Qty : {qty}
			</Button>
			{/* Modal - Quantity */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent my={"auto"} width={"150px"}>
					<ModalHeader textAlign={"center"} fontSize="14px">
						Select Quantity
						<Divider
							borderWidth={1}
							borderColor="#fdcb35"
							w="100px"
							m={"10px auto"}
						/>
					</ModalHeader>
					<ModalBody>
						<VStack>
							<Button variant="ghost" value={"1"} width={"100%"}>
								1
							</Button>
							<Button variant="ghost" value={"2"} width={"100%"}>
								2
							</Button>
							<Button variant="ghost" value={"3"} width={"100%"}>
								3
							</Button>
							<Button variant="ghost" value={"4"} width={"100%"}>
								4
							</Button>
							<Button variant="ghost" value={"5"} width={"100%"}>
								5
							</Button>
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default CartQuantityButton;
