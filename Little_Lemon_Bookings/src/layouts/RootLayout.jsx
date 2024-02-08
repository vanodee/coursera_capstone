import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { Container, Grid, GridItem } from "@chakra-ui/react";


export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
  )
}
