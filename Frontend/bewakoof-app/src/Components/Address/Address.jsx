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

const Address = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const options = ["HOME", "OFFICE", "OTHER"];

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: "framework",
		defaultValue: "react",
		onChange: console.log,
	});

	const group = getRootProps();

	return (
		<>
			<ChakraProvider theme={theme}>
				<Button onClick={onOpen}>Open Modal</Button>

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
								<Select placeholder="Select Country" size="lg">
									<option value="option1">India</option>
									<option value="option2">UAE</option>
									<option value="option3">USA</option>
								</Select>

								<Divider borderColor={"lightgrey"} />

								{/* Full name field */}

								<FormControl variant="floating" isRequired>
									<Input placeholder=" " size="lg" type="text" />
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
										<Input placeholder=" " size="lg" type="tel" />
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
									<Input placeholder=" " size="lg" />
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
										<Input placeholder=" " size="lg" />
										<FormLabel
											fontSize={"1rem"}
											fontWeight={"bold"}
											color="gray.400"
										>
											CIty
										</FormLabel>
									</FormControl>

									<FormControl variant="floating" isRequired>
										<Input placeholder=" " size="lg" />
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
									<Input placeholder=" " size="lg" />
									<FormLabel
										fontSize={"1rem"}
										fontWeight={"bold"}
										color="gray.400"
									>
										Falt no/Building, Street name
									</FormLabel>
								</FormControl>

								{/* Area / Locality details */}

								<FormControl variant="floating" isRequired>
									<Input placeholder=" " size="lg" />
									<FormLabel
										fontSize={"1rem"}
										fontWeight={"bold"}
										color="gray.400"
									>
										Area/Locality
									</FormLabel>
								</FormControl>

								{/* LandMark details */}

								<FormControl variant="floating" isRequired>
									<Input placeholder=" " size="lg" />
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
										{options.map((value) => {
											const radio = getRadioProps({ value });
											return (
												<RadioCard key={value} {...radio}>
													{value}
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
									onClick={onClose}
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
