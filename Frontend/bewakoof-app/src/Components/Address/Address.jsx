import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Stack,
	Input,
	InputLeftAddon,
	InputGroup,
	Select,
	Box,
	Text,
	useRadioGroup,
	HStack,
	Divider,
	ChakraProvider,
	FormLabel,
	FormControl,
} from "@chakra-ui/react";
import RadioCard from "./RadioCard";
import { theme } from "./ThemeLabel";
import { useState } from "react";
import { SaveTheToken } from "../../Utils/LocalStorage";
import { useNavigate } from "react-router";

const Address = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const options = ["HOME", "OFFICE", "OTHER"];

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: "framework",
		defaultValue: "react",
		onChange: console.log,
	});

	const group = getRootProps();

	const navigate = useNavigate();

	//Address feilds

	const [country, setCountry] = useState("India");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [pin, setPin] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [flat, setFlat] = useState("");
	const [area, setArea] = useState("");
	const [locality, setLocality] = useState("");
	const [addressType, setAddressType] = useState("");

	const handleSubmit = () => {
		SaveTheToken("Address", {
			country,
			name,
			phone,
			pin,
			city,
			state,
			flat,
			area,
			locality,
			addressType,
		});

		navigate("/cart/payment");
		onClose();
	};

	return (
		<>
			<ChakraProvider theme={theme}>
				<Button
					width={"60%"}
					p={6}
					fontSize={"18px"}
					colorScheme="teal"
					onClick={onOpen}
				>
					ADD ADDRESS
				</Button>

				<Modal
					blockScrollOnMount={true}
					isOpen={isOpen}
					onClose={onClose}
					size={"3xl"}
				>
					<ModalOverlay
						bg="blackAlpha.100"
						backdropFilter="blur(0.5px) hue-rotate(90deg)"
					/>
					<ModalContent margin={0} borderRadius={0}>
						<ModalHeader mx={8}>Add New Address</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Stack spacing={8} mx={8}>
								<Select
									placeholder="Select Country"
									size="lg"
									onChange={(e) => setCountry(e.target.value)}
								>
									<option value="India">India</option>
									<option value="UAE">UAE</option>
									<option value="USA">USA</option>
								</Select>

								<Divider borderColor={"lightgrey"} />

								{/* Full name field */}

								<FormControl variant="floating" isRequired>
									<Input
										placeholder=" "
										size="lg"
										type="text"
										onChange={(e) => setName(e.target.value)}
									/>
									<FormLabel
										fontSize={"1rem"}
										fontWeight={"bold"}
										color="gray.400"
									>
										Full Name
									</FormLabel>
								</FormControl>

								{/* Phone number feild */}

								<InputGroup size="lg">
									<InputLeftAddon children="+91" />
									<FormControl variant="floating" isRequired>
										<Input
											placeholder=" "
											size="lg"
											type="tel"
											onChange={(e) => setPhone(e.target.value)}
										/>
										<FormLabel
											fontSize={"1rem"}
											fontWeight={"bold"}
											color="gray.400"
										>
											Phone Number
										</FormLabel>
									</FormControl>
								</InputGroup>

								<Divider borderColor={"lightgrey"} />

								{/* Pin code field */}

								<FormControl variant="floating" isRequired>
									<Input
										placeholder=" "
										size="lg"
										id="pin"
										onChange={(e) => setPin(e.target.value)}
									/>
									<FormLabel
										fontSize={"1rem"}
										fontWeight={"bold"}
										color="gray.400"
									>
										Pin Code
									</FormLabel>
								</FormControl>

								{/* City and State field */}

								<Stack direction={["column", "row"]} spacing="24px">
									<FormControl variant="floating" isRequired>
										<Input
											placeholder=" "
											size="lg"
											onChange={(e) => setCity(e.target.value)}
										/>
										<FormLabel
											fontSize={"1rem"}
											fontWeight={"bold"}
											color="gray.400"
										>
											CIty
										</FormLabel>
									</FormControl>

									<FormControl variant="floating" isRequired>
										<Input
											placeholder=" "
											size="lg"
											onChange={(e) => setState(e.target.value)}
										/>
										<FormLabel
											fontSize={"1rem"}
											fontWeight={"bold"}
											color="gray.400"
										>
											State
										</FormLabel>
									</FormControl>
								</Stack>

								{/* Flat Number And Building details */}

								<FormControl variant="floating" isRequired>
									<Input
										placeholder=" "
										size="lg"
										onChange={(e) => setFlat(e.target.value)}
									/>
									<FormLabel
										fontSize={"1rem"}
										fontWeight={"bold"}
										color="gray.400"
									>
										Flat no/Building, Street name
									</FormLabel>
								</FormControl>

								{/* Area / Locality details */}

								<FormControl variant="floating" isRequired>
									<Input
										placeholder=" "
										size="lg"
										onChange={(e) => setArea(e.target.value)}
									/>
									<FormLabel
										fontSize={"1rem"}
										fontWeight={"bold"}
										color="gray.400"
									>
										Area/Locality
									</FormLabel>
								</FormControl>

								{/* LandMark details */}

								<FormControl variant="floating">
									<Input
										placeholder=" "
										size="lg"
										onChange={(e) => setLocality(e.target.value)}
									/>
									<FormLabel
										fontSize={"1rem"}
										fontWeight={"bold"}
										color="gray.400"
									>
										Lankmark (Optional)
									</FormLabel>
								</FormControl>

								<Box>
									<Text fontSize="sm" color={"grey"}>
										Save Address As
									</Text>

									<HStack {...group} mt={3}>
										{options.map((ele) => {
											const radio = getRadioProps({ ele });
											return (
												<RadioCard
													key={ele}
													{...radio}
													onClick={(e) => setAddressType(e.target.value)}
												>
													{ele}
												</RadioCard>
											);
										})}
									</HStack>
								</Box>
							</Stack>
						</ModalBody>

						<ModalFooter margin={"auto"} mt={6} mb={10}>
							<Stack direction={["column", "row"]} spacing="24px">
								<Button
									colorScheme="teal"
									px={16}
									py={6}
									onClick={handleSubmit}
									fontSize={20}
								>
									SAVE ADDRESS
								</Button>
								<Button
									variant="outline"
									colorScheme="teal"
									px={10}
									py={6}
									_hover="none"
									fontSize={20}
									onClick={onClose}
								>
									CANCEL
								</Button>
							</Stack>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</ChakraProvider>
		</>
	);
};

export default Address;
