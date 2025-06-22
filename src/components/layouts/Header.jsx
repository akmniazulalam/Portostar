import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import Flex from '../Flex'
import Menu from '../Menu'
import Button from '../Button'
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
  return (
    <section className='py-5 bg-bannerBg'>
      <Container>
        <Flex className={'justify-between'}>
            <div className="">
                <Image  Src={Logo} Alt={Logo}/>
            </div>
            <div>
                <Menu className={"flex gap-x-13"}>
                    <li className='font-poppins text-[14px] uppercase cursor-pointer hover:text-gray-600 transition-all duration-300'>Home</li>
                    <li className='font-poppins text-[14px] uppercase cursor-pointer hover:text-gray-600 transition-all duration-300'>About Us</li>
                    <li className='font-poppins text-[14px] uppercase cursor-pointer hover:text-gray-600 transition-all duration-300'>Services</li>
                    <li className='font-poppins text-[14px] uppercase cursor-pointer hover:text-gray-600 transition-all duration-300'>Works</li>
                </Menu>
            </div>
            <div className="">
                <Button className={"py-3"} btnText={<>HIRE ME <HiOutlineMail className='inline-block ml-2 text-[18px] '/></>}/> 
            </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Header