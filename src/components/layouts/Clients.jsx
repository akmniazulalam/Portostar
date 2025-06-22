import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import LogoOne from '../../assets/logoipsum-logo-1.png'
import LogoTwo from '../../assets/logoipsum-logo-3.png'
import LogoThree from '../../assets/logoipsum-logo-6.png'
import LogoFour from '../../assets/logoipsum-logo-7.png'

const Clients = () => {
  return (
    <section className='pt-10 pb-20'>
        <Container>
            <Flex className={"grid grid-cols-4 place-items-center"}>
                <Image className={""} Src={LogoOne} Alt={LogoOne}/>
                <Image className={""} Src={LogoTwo} Alt={LogoTwo}/>
                <Image className={""} Src={LogoThree} Alt={LogoThree}/>
                <Image className={""} Src={LogoFour} Alt={LogoFour}/>
            </Flex>
        </Container>
    </section>
  )
}

export default Clients