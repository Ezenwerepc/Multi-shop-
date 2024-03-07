import { Fragment } from "react";
import classes from './index.module.css';



function Index ()  {
 return(
<Fragment>


    <div className={`${classes["container-fluid"]} ${classes["bg-dark"]} ${classes["text-secondary"]} ${classes["mt-5"]} ${classes["pt-5"]}`}>
        <div className={`${classes["row"]} ${classes["px-xl-5"]} ${classes["pt-5"]}`}>
            <div className={`${classes["col-lg-4"]} ${classes["col-md-12"]} ${classes["mb-5"]} ${classes["pr-3"]} ${classes["pr-xl-5"]}`}>
                <h5 className={`${classes["text-secondary"]} ${classes["text-uppercase"]} ${classes["mb-4"]}`}>Get In Touch</h5>
                <p className={classes["mb-4"]}>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                <p className={classes["mb-2"]}><i className={`${classes["fa"]} ${classes["fa-map-marker-alt"]} ${classes["text-primary"]} ${classes["mr-3"]}`}></i>123 Street, New York, USA</p>
                <p className={classes["mb-2"]}><i className={`${classes["fa"]} ${classes["fa-envelope"]} ${classes["text-primary"]} ${classes["mr-3"]}`}></i>info@example.com</p>
                <p className={classes["mb-0"]}><i className={`${classes["fa"]} ${classes["fa-phone-alt"]} ${classes["text-primary"]} ${classes["mr-3"]}`}></i>+2348035232311</p>
            </div>
            <div className={`${classes["col-lg-8"]} ${classes["col-md-12"]}`}>
                <div className={classes["row"]}>
                    <div className={`${classes["col-md-4"]} ${classes["mb-5"]}`}>
                        <h5 className={`${classes["text-secondary"]} ${classes["text-uppercase"]} ${classes["mb-4"]}`}>Quick Shop</h5>
                        <div className={`${classes["d-flex"]} ${classes["flex-column"]} ${classes["justify-content-start"]}`}>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Home</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Our Shop</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Shop Detail</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Shopping Cart</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Checkout</a>
                            <a className={classes["text-secondary"]} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Contact Us</a>
                        </div>
                    </div>
                    <div className={`${classes["col-md-4"]} ${classes["mb-5"]}`}>
                        <h5 className={`${classes["text-secondary"]} ${classes["text-uppercase"]} ${classes["mb-4"]}`}>My Account</h5>
                        <div className={`${classes["d-flex"]} ${classes["flex-column"]} ${classes["justify-content-start"]}`}>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Home</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Our Shop</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Shop Detail</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Shopping Cart</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Checkout</a>
                            <a className={classes["text-secondary"]} href="#"><i className={`${classes["fa"]} ${classes["fa-angle-right"]} ${classes["mr-2"]}`}></i>Contact Us</a>
                        </div>
                    </div>
                    <div className={`${classes["col-md-4"]} ${classes["mb-5"]}`}>
                        <h5 className={`${classes["text-secondary"]}${classes["text-uppercase"]} ${classes["mb-4"]}`}>Newsletter</h5>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <form action="">
                            <div className={classes["input-group"]}>
                                <input type="text" className={classes["form-control"]} placeholder="Your Email Address"/>
                                <div className={classes["input-group-append"]}>
                                    <button className={`${classes["btn"]} ${classes["btn-primary"]}`}>Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <h6 className={`${classes["text-secondary"]} ${classes["text-uppercase"]} ${classes["mt-4"]} ${classes["mb-3"]}`}>Follow Us</h6>
                        <div className={classes["d-flex"]}>
                            <a className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["btn-square"]} ${classes["mr-2"]}`} href="#"><i className={`${classes["fab"]} ${classes["fa-twitter"]}`}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["btn-square"]} ${classes["mr-2"]}`} href="#"><i className={`${classes["fab"]} ${classes["fa-facebook-f"]}`}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["btn-square"]} ${classes["mr-2"]}`} href="#"><i className={`${classes["fab"]} ${classes["fa-linkedin-in"]}`}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["btn-square"]}`} href="#"><i className={`${classes["fab"]} ${classes["fa-instagram"]}`}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${classes["row"]} ${classes["border-top"]} ${classes["mx-xl-5"]} ${classes["py-4"]}`} style={{borderColor: "rgba(256, 256, 256, .1)"}}>
            <div className={`${classes["col-md-6"]} ${classes["px-xl-0"]}`}>
                <p className={`${classes["mb-md-0"]} ${classes["text-center"]} ${classes["text-md-left"]} ${classes["text-secondary"]}`}>
                    &copy; <a className={classes["text-primary"]} href="#">Domain</a>. All Rights Reserved. Designed
                    by
                    <a className={classes["text-primary"]} href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
            <div className={`${classes["col-md-6"]} ${classes["px-xl-0"]} ${classes["text-center"]} ${classes["text-md-right"]}`}>
                <img className={classes["img-fluid"]} src="assets/img/payments.png" alt=""/>
            </div>
        </div>
    </div>


    <a href="#" className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["back-to-top"]}`}><i className={`${classes["fa"]} ${classes["fa-angle-double-up"]}`}></i></a>


    <script src="assets/https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="assets/https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="assets/lib/easing/easing.min.js"></script>
    <script src="assets/lib/owlcarousel/owl.carousel.min.js"></script>

    
    <script src="assets/mail/jqBootstrapValidation.min.js"></script>
    <script src="assets/mail/contact.js"></script>

    <script src="assets/js/main.js"></script>


</Fragment>

 )
}
export default Index;