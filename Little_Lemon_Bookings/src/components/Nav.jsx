import {
    HStack,
    VStack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react"

import { useRef } from "react";

import NavItems from "./NavItems";



function Nav() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <HStack
                spacing={4}
                display={{ base: "none", lg: "flex" }}
            >
                <NavItems />
            </HStack>

            <Button
                ref={btnRef}
                bg='primary.2'
                onClick={onOpen}
                display={{ base: "block", md: "block", lg: "none" }}
            >
                Open
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerCloseButton />
                    <DrawerHeader>Navigation</DrawerHeader>

                    <DrawerBody>
                        <VStack>
                            <NavItems onClick={onClose} />
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Nav;