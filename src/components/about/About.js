import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { info } from "../../info/Info";
import { motion } from 'framer-motion';

export default function About({innerRef}) {
    const theme = useTheme();
    const firstName = info.firstName.toLowerCase();

    // Use a light color for all terminal text
    const terminalTextColor = '#FFFFFF';
    const promptColor = theme.palette.primary.main;

    const terminalVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    function aboutMeText() {
        return <>
            <Typography component="p" fontFamily="'Courier New', monospace" color={terminalTextColor}>
                <span style={{color: promptColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat about{firstName}
            </Typography>
            <Typography component="p" fontFamily="'Courier New', monospace" mt={1} color={terminalTextColor}>
                <span style={{color: promptColor}}>about{firstName} <span className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </Typography>
        </>;
    }

    function skillsText() {
        return <>
            <Typography component="p" fontFamily="'Courier New', monospace" color={terminalTextColor}>
                <span style={{color: promptColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </Typography>
            <Typography component="p" fontFamily="'Courier New', monospace" mt={1} color={terminalTextColor}>
                <span style={{color: promptColor}}>skills/tools <span className={Style.green}>(main)</span> $</span> ls
            </Typography>
            <Typography component="p" fontFamily="'Courier New', monospace" color={promptColor} mt={1}>Proficient With</Typography>
            <ul className={Style.skills} style={{color: terminalTextColor}}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <Typography component="p" fontFamily="'Courier New', monospace" color={promptColor} mt={2}>Exposed To</Typography>
            <ul className={Style.skills} style={{color: terminalTextColor}}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function certificationsText() {
        return <>
            <Typography component="p" fontFamily="'Courier New', monospace" color={terminalTextColor}>
                <span style={{color: promptColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd certifications
            </Typography>
            <Typography component="p" fontFamily="'Courier New', monospace" mt={1} color={terminalTextColor}>
                <span style={{color: promptColor}}>certifications <span className={Style.green}>(main)</span> $</span> ls
            </Typography>
            {info.certifications && info.certifications.length > 0 ? (
                <ul className={Style.skills} style={{color: terminalTextColor}}>
                    {info.certifications.map((cert, index) => (
                        <li key={index}>
                            <span style={{color: promptColor}}>{cert.certificate}</span> - {cert.issuer}
                        </li>
                    ))}
                </ul>
            ) : (
                <Typography component="p" fontFamily="'Courier New', monospace" mt={1} color={terminalTextColor}>
                    No certifications listed
                </Typography>
            )}
        </>;
    }

    return (
        <Box ref={innerRef} mt={'3rem'} id={'about'}>
            <Grid container spacing={4} justifyContent="center">
                {[aboutMeText, skillsText, certificationsText].map((textFunction, index) => (
                    <Grid item xs={12} md={10} lg={8} key={index}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={terminalVariants}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Terminal text={textFunction()} />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
