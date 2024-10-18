import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid, Typography, useTheme, Container} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    const theme = useTheme();

    return (
        <Box 
          id={'portfolio'} 
          ref={innerRef} 
          paddingTop={'3rem'} 
          paddingBottom={'5rem'}
          bgcolor={theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}
        >
            <Container maxWidth="lg">
                <Typography 
                    variant="h4" 
                    component="h2" 
                    align="center" 
                    gutterBottom 
                    mb={4} 
                    sx={{
                        color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary,
                        textShadow: theme.palette.mode === 'dark' ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
                        fontWeight: 'bold',
                        letterSpacing: '0.05em'
                    }}
                >
                    My Portfolio
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {info.portfolio.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                }
                            }}>
                                <PortfolioBlock 
                                    image={project.image} 
                                    title={project.title}
                                    description={project.description}
                                    source={project.source}
                                    technologies={project.technologies}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
