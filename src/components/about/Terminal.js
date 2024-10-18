import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";
import { motion } from 'framer-motion';

const Terminal = ({ text }) => {
    const [focused, setFocused] = React.useState(false);

    const terminalVariants = {
        initial: { scale: 0.96, boxShadow: "0 0 0 rgba(0, 0, 0, 0.2)" },
        hover: { 
            scale: 1, 
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            variants={terminalVariants}
            initial="initial"
            whileHover="hover"
            style={{ width: '100%' }}
        >
            <Box
                component={'section'}
                className={classNames(Style.terminal, {[Style.focused]: focused})}
                onMouseEnter={() => setFocused(true)}
                onMouseLeave={() => setFocused(false)}
                width="100%"
            >
                <Box component={'div'} className={Style.terminal__header}>
                    <div className={Style.terminal__button}></div>
                    <div className={Style.terminal__button}></div>
                    <div className={Style.terminal__button}></div>
                </Box>
                <Box 
                    component={'div'} 
                    className={Style.terminal__body}
                    sx={{
                        backgroundColor: '#1E1E1E', // Dark background for terminal
                        color: '#FFFFFF', // Light text color
                    }}
                >
                    {text}
                </Box>
            </Box>
        </motion.div>
    )
}

export default Terminal;
