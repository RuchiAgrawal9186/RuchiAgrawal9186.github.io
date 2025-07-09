import React from 'react'
import "./Navbar.css"
import Web from './web/Web'
import Mobile from './mobile/Mobile'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { FaTimesCircle } from "react-icons/fa";
// import { useColorMode,useColorModeValue ,Box} from '@chakra-ui/react';

const Navbar = () => {

  // const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen,setIsOpen] = useState(false)
  return (
    // <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} id="nav-menu" className='header'>

    <div id="nav-menu" className='header'>
      <div className='logo'>
        <img src="../images/ruchi.png" alt="ruchiimage" />
        <div className='nav-link home'>Ruchi</div>
      </div>
      

      <div className='menu'>

        <div className='web-menu'>
          <Web/>
        </div>
        <div className='mobile-menu'>
          <div onClick={ () => setIsOpen(!isOpen)}>
            {
              isOpen ? <FaTimesCircle style={{fontSize:"24PX"}}></FaTimesCircle> : <FaBars className='menu-icon'></FaBars>
            }
            
            </div>
          
           {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        
        </div>

      </div>



    </div>
    // </Box>
  )
}

export default Navbar

