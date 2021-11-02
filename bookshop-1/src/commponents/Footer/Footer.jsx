import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system";
import './footer.css';



function Footer(params) {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
    return (
        <footer className="footer">
            <div className="footer__container">
                <Box className="footer__content">
                    <Box className="footer__header">
                        <div className="footer__title">
                            BOOKSHOP
                        </div>
                    </Box>
                    <Box className="footer__options">
                            <div className="footer__products">
                                <div className="footer__content-title">Products</div>
                                <div className="footer__list">
                                    <a href="" className="footer__link">Young Adult</a>
                                    <a href="" className="footer__link">Teen</a>
                                    <a href="" className="footer__link">Kids</a>
                                    <a href="" className="footer__link">Online Reading</a>
                                </div>
                            </div>
                            <div className="footer__about">
                            <div className="footer__content-title">About Us</div>
                                <div className="footer__list">
                                    <a href="" className="footer__link">Young Adult</a>
                                    <a href="" className="footer__link">Teen</a>
                                    <a href="" className="footer__link">Kids</a>
                                </div>
                            </div>
                            <div className="footer__news">
                                <div className="footer__content-title">News</div>
                                    <div className="footer__list">
                                        <a href="" className="footer__link">Young Adult</a>
                                    </div>
                            </div>
                            <div className="footer__services">
                            <div className="footer__content-title">Our Services</div>
                                <div className="footer__list">
                                    <a href=""  className="footer__link">Young Adult</a>
                                </div>
                            </div>
                    </Box>
                    <Box className="accordion-box">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                        className="accardion"
                        sx={{background:"initial"}}
                        >
                            <AccordionSummary
                            expandIcon={ <AddIcon sx={{background:"white", borderRadius: '30px'}} /> }
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography sx={{ 
                                width: '33%', 
                                flexShrink: 0, 
                                color:"white",
                                fontFamily: 'Lato', 
                                fontSize: '20px',
                                fontWeight: 'normal', 
                                fontStyle: 'normal',
                                lineHeight: '24px', 
                                }}>
                                Products
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                Young Adult
                            </Typography>
                            <Typography  sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                Teen
                            </Typography>
                            <Typography sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                Kids
                            </Typography>
                            <Typography sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                Online Reading
                            </Typography>
                            </AccordionDetails>
                            
                        </Accordion>
                        <div className="decorate"></div>
                        <Accordion expanded={expanded === 'panel2'} className="accardion" sx={{background:"initial"}} onChange={handleChange('panel2')}>
                            <AccordionSummary
                            expandIcon={<AddIcon  sx={{background:"white", borderRadius: '30px'}}/>}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0,   fontFamily: 'Lato', 
                                fontSize: '20px',
                                fontWeight: 'normal', 
                                fontStyle: 'normal',
                                lineHeight: '24px', 
                                color:"white", }}>About Us</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                Who We Are
                            </Typography>
                            <Typography sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                History
                            </Typography>
                            <Typography sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                Mission
                            </Typography>
                            </AccordionDetails>
                            
                        </Accordion>
                        <div className="decorate"></div>
                        <Accordion expanded={expanded === 'panel3'} className="accardion" sx={{background:"initial"}} onChange={handleChange('panel3')}>
                            <AccordionSummary
                            expandIcon={<AddIcon sx={{background:"white", borderRadius: '30px'}} />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0,   fontFamily: 'Lato', 
                                fontSize: '20px',
                                fontWeight: 'normal', 
                                fontStyle: 'normal',
                                lineHeight: '24px', 
                                color:"white", }}>
                                News
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                Our Latest News
                            </Typography>
                            </AccordionDetails>
                           
                        </Accordion>
                        <div className="decorate"></div>
                        <Accordion expanded={expanded === 'panel4'} className="accardion" sx={{background:"initial"}} onChange={handleChange('panel4')}>
                            <AccordionSummary
                            expandIcon={<AddIcon sx={{background:"white", borderRadius: '30px'}} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0,
                                fontFamily: 'Lato', 
                                fontSize: '20px',
                                fontWeight: 'normal', 
                                fontStyle: 'normal',
                                lineHeight: '24px', 
                                color:"white",
                                width:"118px"
                            }}>Our Services</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{color:"white", fontSize:'18px', fontFamily:"Lato"}}>
                                Education
                            </Typography>
                            </AccordionDetails>
                            </Accordion>    
                            <div className="decorate"></div>
                        </Box>
                </Box>
            </div>
        </footer>
    )
}

export default Footer;