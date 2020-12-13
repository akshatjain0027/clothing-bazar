import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import contact1 from '../../assets/Akshat.jpg'
import contact2 from '../../assets/Piyush.jpg'
import contactPage from '../../assets/contactPage.jpg'

const ContactPage = () => {
    const IDCard = (name, roll, emailId, phone, image) => {
        return(
                <Card style={{ width: "100%" }}>
                    <Grid container direction="row">
                        <div style={{ width: "40%" }}>
                            <img src={image} style={{ width: "100%", height: "250px" }} />
                        </div>
                        <Grid container direction="column" style={{ width: "60%", padding: "5%" }}>
                            <Typography variant="h3" style={{ textAlign: 'center', fontFamily: "fantasy" }}>
                                {name}
                            </Typography>
                            <Grid container direction="column" style={{ textAlign: 'left', paddingTop: "15%" }}>
                                <Typography variant="h5">
                                    {roll}
                            </Typography>
                                <Typography variant="h5">
                                    BTECH (Information Technology)
                            </Typography>
                                <Typography variant="h5">
                                    USICT, GGSIPU
                            </Typography>
                                <Typography variant="h5">
                                    {emailId}
                            </Typography>
                                <Typography variant="h5">
                                    +91 {phone}
                            </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Card>
        )
    }
    return (
        <div>
            <img src={contactPage} style={{ width: "100%", height: "720px", position: "relative", opacity: "1" }} />
            <Typography variant="h1" style={{color: "white", width: "100%", textAlign: "center", position: "absolute", top: "110px", fontFamily: "cursive"}}>
                    DEVELOPERS
            </Typography>
            <Grid container direction="row" style={{ position: "absolute", top: "150px"}}>
                <div style={{ width: "50%", padding: "8%" }}>
                    {IDCard("AKSHAT JAIN", 65116401517, "akshatjain0027@gmail.com", 9654046059, contact1)}
                </div>
                <div style={{ width: "50%", padding: "8%" }}>
                    {IDCard("PIYUSH KHURANA", 50316401517, "khuranapiyush27@gmail.com", 8851996933, contact2)}
                </div>
            </Grid>
        </div>
    )
}

export default ContactPage;