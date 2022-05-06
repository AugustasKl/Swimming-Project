import { Box, Container, FlexWrapper, GridWrapper, Image, SectionWrapper, Typography } from 'components'
import { ButtonPrimary } from 'components/buttons/ButtonPrimary'
import React from 'react'
import { useQuery } from 'styles/theme'
import HeroImage from '../elements/HeroImage'

const HeroSection:React.FC = () => {
    const isMobile=useQuery()
  return (
   <>
   <SectionWrapper padding='10rem 4rem' backgroundColor="subscribeBackground">
       <Container>
           <FlexWrapper  flexDirection={{ _: "column", desktop: "row" }} gap='4rem'>
               <Box maxWidth="40rem">
                <Typography type='h4'>
                    SwimPro the best ranked sports team in 2022 
                </Typography>
                <Box marginY={{_:'s16', desktop:"s32"}}>
                    <FlexWrapper>
                    <Typography color="radioColor">120k+ &nbsp;</Typography> 
                    <Typography>happy community members</Typography>   
                    </FlexWrapper>
                </Box>
                <Typography>Find out how much weight you can lose by taking a 60-sec quiz
                 approved by our experts, and get your personalized plan now.
                 </Typography>
                 <ButtonPrimary>Start quiz</ButtonPrimary>
               </Box>
           <HeroImage/>
           </FlexWrapper>
           {/* <Image src='freestyle' alt='fresstyle' width='50'/> */}
       </Container>
   </SectionWrapper>
   </>
  )
}

export default HeroSection