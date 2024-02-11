import { NavLink } from "react-router-dom";

export default function NavItems(props) {
  return (
    <>
      <NavLink to='/' {...props}>Home</NavLink>
      <NavLink to='#' {...props}>About</NavLink>
      <NavLink to='#' {...props}>Menu</NavLink>
      <NavLink to='Reservations' {...props}>Reservations</NavLink>
      <NavLink to='#' {...props}>Order Online</NavLink>
      <NavLink to='#' {...props}>Login</NavLink>
    </>
  )
}
