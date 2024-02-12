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
    IconButton
} from "@chakra-ui/react"

import { HamburgerIcon } from "@chakra-ui/icons"

import { useRef } from "react";

import NavItems from "./NavItems";




function Nav() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <HStack
                spacing={2}
                display={{ base: "none", lg: "flex" }}
            >
                <NavItems />
            </HStack>

            <IconButton
                aria-label='Open Navigation'
                ref={btnRef}
                bg='primary.2'
                onClick={onOpen}
                display={{ base: "block", md: "block", lg: "none" }}
                icon={<HamburgerIcon />}
            />

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
                        <VStack spacing="1rem">
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