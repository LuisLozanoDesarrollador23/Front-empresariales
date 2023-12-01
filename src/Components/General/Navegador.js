import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElements'
const Navegador = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>        
          <MenuLink to="/" activestyle>
          Home
          </MenuLink>
          <MenuLink to="/Admin" activestyle>
            Admin
          </MenuLink>
          <MenuLink to="/Machine" activestyle>
          Maquinas
          </MenuLink>
          <MenuLink to="/OperatorUsers" activestyle>
          UsuariosOperadores
          </MenuLink>
          <MenuLink to="/Customer" activestyle>
          Clientes
          </MenuLink>
          
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navegador