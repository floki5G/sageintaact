import { Header } from "./header/index.js"
import { Body } from "./body/index.js"
import { Sliderone } from "./slider/index.js"
import { Slidertwo } from "./slidertwo/index.js"
export const Home = () => {

    return (

        <>


            <Header />
            <Body />
            <Slidertwo />

            <div className="between">

                <div className="between-title">

                    Your partner for the long-term
                </div>
                <div className="between-desc">
                    We’re obsessed with ensuring your success. From our Customer for Life™ program to our proven, connected products that you won’t outgrow; we’ll be with you every step of the way.
                </div>
                <div className="between-dsc">
                    <div className="mmm">
                        <img src="https://www.sageintacct.com/sites/default/files/sage-intacct-customer-for-life.png"></img>
                        <div>
                            You get a partner that’s invested in <br></br>your success
                        </div>
                    </div>
                    <div className="mmm">
                        <img src="https://www.sageintacct.com/sites/default/files/aicpa-preferred-financial-management-solution.png"></img>
                        <div>
                            You get the best, proven technology for <br></br> your organization
                        </div>
                    </div>
                    <div className="mmm">
                        <img src="https://www.sageintacct.com/sites/default/files/grow-scale-with-sage-intacct.png"></img>
                        <div>
                            You won’t outgrow us; we’ll scale <br></br> with you every step of the way
                        </div>
                    </div>
                </div>
            </div>


            <div className="slideronehad" style={{
                margin: "50px"
            }}>

                <div className="" style={{ margin: "50px", fontSize: "50px", fontWeight: "500px" }}>
                    See what’s popular

                </div>
                <Sliderone />
                <div style={{
                    maginTop: "50px", margin: "100px", display: "flex",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "18px",
                    flexDirection: "column"
                }}>
                    <div style={{ borderBottom: "2px solid black", }}>
                        View all accounting and financials resources

                    </div>

                    <div style={{
                        listStyle: "none",
                        fontSize: "12px",
                        color: "#51534a",
                        position: "relative",
                        paddingLeft: "15px",
                        borderBottom: "2px solid black",
                        marginTop: "20vh"
                    }}>
                        Gartner, Inc., “Critical Capabilities for Cloud Core Financial Management Suites for Midsize, Large, and Global Enterprises”; Robert Anderson, John Van Decker, Greg Leiter; May 11, 2021 (ID: G00733936) (In the 2017 report Sage Intacct was recognized as “Intacct”)
                    </div>
                </div>
            </div>




            <div className="main-icons" style={{ display: "flex", justifyContent: "center", }}>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-youtube-square"></i>
                <i className="fab fa-instagram"></i>
            </div>



            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row align-items-start">
                    <div className="col">
                        <div className="footer-had"> Products</div>

                        <div>
                            <div>Core Financials</div>
                            <div>Dashboard and Reporting</div>

                            <div>Billing</div>

                            <div>Planning</div>
                            <div>Sage Intacct Platform</div>
                            <div>Advanced Functionality</div>
                        </div>
                    </div>
                    <div className="col" >

                        <div className="footer-had"> Services</div>

                        <div>
                            <div>Support</div>
                            <div>Training</div>
                            <div>Community</div>
                            <div>Planning</div>
                            <div>Professional Services</div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="footer-had">  Resource Center</div>

                        <div>
                            <div>Upcoming Webinars</div>
                            <div>  Product Demos</div>
                            <div>Data Sheets</div>
                            <div>White Papers</div>
                            <div>Accounting Glossary</div>
                            <div>Blog</div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="footer-had">   Quick Links</div>

                        <div>
                            <div>Contact</div>
                            <div>Customer Meetups</div>
                            <div>User Groups</div>
                            <div>Recommend Sage Intacct</div>
                            <div>Free 30-day Trial</div>
                        </div>

                    </div>
                    <div className="col">

                        <div className="footer-had">
                            <img src="https://www.sageintacct.com/sites/default/files/sage-intacct-logo.svg" />
                        </div>
                        <div>
                            <div style={{ marginTop: "10px" }}>
                                Sage Intacct<br></br>
                                300 Park Avenue, Suite 1400<br></br>
                                San Jose, CA 95110
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <h5>
                                    Sales Inquirie
                                </h5>
                                <br></br>

                                877-437-7765
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">

                    <div className="col">
                        <div className="footer-had"> Products</div>

                        <div>
                            <div>Core Financials</div>
                            <div>Dashboard and Reporting</div>

                            <div>Billing</div>

                            <div>Planning</div>
                            <div>Sage Intacct Platform</div>
                            <div>Advanced Functionality</div>
                        </div>
                    </div>
                    <div className="col" >

                        <div className="footer-had"> Services</div>

                        <div>
                            <div>Support</div>
                            <div>Training</div>
                            <div>Community</div>
                            <div>Planning</div>
                            <div>Professional Services</div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="footer-had">  Resource Center</div>

                        <div>
                            <div>Upcoming Webinars</div>
                            <div>  Product Demos</div>
                            <div>Data Sheets</div>
                            <div>White Papers</div>
                            <div>Accounting Glossary</div>
                            <div>Blog</div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="footer-had">   Quick Links</div>

                        <div className="bg-success" style={{ padding: "7px" }}>
                            Subscribe to our newsletter
                        </div>

                    </div>
                    <div className="col">

                        <div className="footer-had">
                            Customer Support


                        </div>
                        <div>
                            <div style={{ marginTop: "10px" }}>
                                North America: 877-704-3700 (US toll free) or 408-785-7340<br></br>

                                United Kingdom: +44 (0)19 1479 5990<br></br>

                                Australia:+61 1300 729 330<br></br>

                                South Africa: +27 (0)11 304 3220<br></br>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="main-icons footer-button" style={{ display: "flex", justifyContent: "center",  alignItems:"center"}}>
                <div style={{fontSize:"25px"}}>
                Also of Interest:

                </div>
                <div>
                Professional Service
                </div>
                <div>
                Accounting Software with...
                </div>
                <div>
                Project  Accounting Software
                </div>
                <div>
                Accounting Software

                </div>

            </div>

            <div className="main-icons" style={{ display: "flex", justifyContent: "center",  alignItems:"center", margin:"40px 0px"}}>
                <div style={{fontSize:"15px"}}>
                © Copyright 2022 Sage Intacct, Inc. | Privacy Policy | Responsible Disclosure | Customer Terms | Site Map


                </div>

            </div>



        </>
    )
}