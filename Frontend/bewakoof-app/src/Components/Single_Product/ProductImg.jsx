import { Box, Image } from "@chakra-ui/react";

export default function SingleProductImg({data}){
    // console.log("image",data.productImg)
    return(
        <Box width={"100%"}>
            <Image margin={"auto"} height={"90%"} width={"95%"} src={data.productImg}/>
        </Box>
    )
}