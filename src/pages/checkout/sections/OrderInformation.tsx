import React from 'react'
import {ContainerSmall,  SectionWrapper, Typography } from 'components'

export const OrderInformation:React.FC = () => (
    <SectionWrapper>
        <ContainerSmall maxWidth='49.5rem'>
            <Typography fontSize='fs20' pb={{_:'s24', desktop:'s32'}} textAlign={{_:'left',desktop:'center'}} type='h6' >What happens after I order?</Typography>
            <Typography fontSize={{_:'fs16', desktop:'fs18'}}>
                <li>You receive an email with all the necessary info to begin your Swimclub journey.</li>
                <li>You will be enrolled in the email sequence, which will guide you with tips & tricks throughout the entire journey.</li>
           </Typography>
           <Typography color="radioColor" fontSize='fs14' pt={{_:'s32', desktop:'s48'}}>
           The information we provide at our website or app is not intended to replace consultation with a qualified medical professional. Please, seek the advice of your psychologist or another qualified health provider with any questions you may have regarding a medical condition. For questions or concerns about any medical conditions you may have, please contact your doctor. For more information check out our Terms and Conditions.
           </Typography>
        </ContainerSmall>
    </SectionWrapper>
  )


 