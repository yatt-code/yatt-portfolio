import React from 'react';
import IconLink from "./IconLink";
import {Box, Typography, Chip, useTheme, Card, CardContent, CardMedia, CardActions} from "@mui/material";

function PortfolioBlock(props) {
   const {image, title, description, source, technologies} = props;
   const theme = useTheme();

   return (
      <Card 
        sx={{
          maxWidth: 345,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s, box-shadow 0.3s',
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : theme.palette.background.paper,
          color: theme.palette.text.primary,
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.palette.mode === 'dark' 
              ? '0 6px 12px rgba(255, 255, 255, 0.1)' 
              : '0 6px 12px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
              textShadow: theme.palette.mode === 'dark' 
                ? '0 0 8px rgba(255,255,255,0.5)'
                : 'none',
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="inherit" paragraph>
            {description}
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle2" color="inherit" gutterBottom>
              Technologies used:
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={0.5}>
              {technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 'bold',
                  }}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
        </CardActions>
      </Card>
   );
}

export default PortfolioBlock;
