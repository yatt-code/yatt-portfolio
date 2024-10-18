import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box, Typography, Tooltip } from "@mui/material";
import { info } from "../../info/Info";
import { motion } from 'framer-motion';

export default function Home({innerRef}) {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
         opacity: 1,
         transition: { delay: 0.3, duration: 0.8 }
      }
   };

   const imageVariants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { 
         scale: 1,
         opacity: 1,
         transition: { delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }
      }
   };

   // Filter social icons to only include GitHub and LinkedIn
   const filteredSocials = info.socials.filter(social => 
      social.label === 'github' || social.label === 'linkedin'
   );

   return (
      <Box 
         ref={innerRef} 
         component={'main'} 
         display={'flex'} 
         flexDirection={{xs: 'column', md: 'row'}} 
         alignItems={'center'}
         justifyContent={'center'} 
         minHeight={'calc(100vh - 175px)'} 
         id={'home'}
         position={'relative'}
         overflow={'hidden'}
      >
         <Box 
            className={Style.backgroundElement} 
            position={'absolute'} 
            top={0} 
            left={0} 
            right={0} 
            bottom={0} 
            zIndex={-1}
         />
         <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
         >
            <Box 
               component="img"
               className={classNames(Style.avatar, Style.shadowed)} 
               alt={'image of developer'} 
               style={{background: info.gradient}} 
               src={me} 
               width={{xs: '35vh', md: '40vh'}}
               height={{xs: '35vh', md: '40vh'}}
               borderRadius={'50%'} 
               p={'0.75rem'} 
               mb={{xs: '1rem', sm: 0}} 
               mr={{xs: 0, md: '2rem'}}
               loading="lazy"
            />
         </motion.div>
         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            <Box>
               <Typography variant="h1" className={Style.name}>
                  Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span>
                  <motion.span 
                     className={Style.hand}
                     animate={{ rotate: [0, 20, 0] }}
                     transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                  >
                     🤚
                  </motion.span>
               </Typography>
               <Typography variant="h2" className={Style.position}>
                  I'm {info.position}.
               </Typography>
               <Box component={'ul'} p={'0.8rem'}>
                  {info.miniBio.map((bio, index) => (
                     <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
                  ))}
               </Box>
               <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
                  {filteredSocials.map((social, index) => (
                     <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                     >
                        <Tooltip title={social.label} arrow>
                           <span>
                              <SocialIcon link={social.link} icon={social.icon} label={social.label} />
                           </span>
                        </Tooltip>
                     </motion.div>
                  ))}
               </Box>
            </Box>
         </motion.div>
      </Box>
   )
}
