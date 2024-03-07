import { Fragment } from "react";
import classes from './MainNavigation.module.css';




function MainNavigation ()  {
 return(
<Fragment>
<div className={classes["container-fluid"]}>
        <div className={`${classes["row"]}
        ${classes["bg-secondary"]} ${classes["py-1"]} ${classes["px-xl-5"]}`}>
            <div className={`${classes["col-lg-6"]} ${classes["d-none"]} ${classes["d-lg-block"]}`}>
                <div className={`${classes["d-inline-flex"]} ${classes["align-items-center"]} ${classes["h-100"]}`}>
                    <a className={`${classes["text-body"]} ${classes["mr-3"]}`} href="">About</a>
                    <a className={`${classes["text-body"]} ${classes["mr-3"]}`} href="">Contact</a>
                    <a className={`${classes["text-body"]} ${classes["mr-3"]}`} href="">Help</a>
                    <a className={`${classes["text-body"]} ${classes["mr-3"]}`} href="">FAQs</a>
                </div>
            </div>
            <div className={`${classes["col-lg-6"]} ${classes["text-center"]} ${classes["text-lg-right"]}`}>
                <div className={`${classes["d-inline-flex"]} ${classes["align-items-center"]}`}>
                    <div className={classes["btn-group"]}>
                        <button type="button" className={`${classes["btn"]} ${["btn-sm"]} ${classes["btn-light"]} ${"dropdown-toggle"}`} data-toggle={"dropdown"}>My Accougnt</button>
                        <div className={`${classes["dropdown-menu"]} ${classes["dropdown-menu-right"]}`}>
                            <button className={classes["dropdown-item"]} type="button">Sign in</button>
                            <button className={classes["dropdown-item"]} type="button">Sign up</button>
                        </div>
                    </div>
                    <div className={`${classes
                    ["btn-group"]} ${classes["mx-2"]}`}>
                        <button type="button" className={`${classes["btn"]} ${classes["btn-sm"]} ${classes["btn-light"]} ${"dropdown-toggle dropdown"}`} data-toggle={"dropdown"}>USD</button>
                        <div className={`${classes["dropdown-menu"]} ${classes["dropdown-menu-right"]}`}>
                            <button className={classes["dropdown-item"]} type="button">EUR</button>
                            <button className={classes["dropdown-item"]}type="button">GBP</button>
                            <button className={classes["dropdown-item"]}type="button">CAD</button>
                        </div>
                    </div>
                    <div className={classes["btn-group"]}>
                        <button type="button" className={`${classes["btn"]} ${classes["btn-sm"]} ${classes["btn-light"]} ${classes["dropdown-toggle"]}`} data-toggle="dropdown">EN</button>
                        <div className={`${classes["dropdown-menu"]} ${classes["dropdown-menu-right"]}`}>
                            <button className={classes["dropdown-item"]}type="button">FR</button>
                            <button className={classes["dropdown-item"]} type="button">AR</button>
                            <button className={classes["dropdown-item"]}type="button">RU</button>
                        </div>
                    </div>
                </div>
                <div className={`${classes["d-inline-flex"]} ${classes["align-items-center"]} ${classes["d-block"]} ${classes["d-lg-none"]}`}>
                    <a href="" className= {`${classes["btn"]} ${classes["px-0"]} ${classes["ml-2"]}`}>

                        <i className= "fas fa-heart text-dark"></i>
                        <span className={`${classes["badge"]} ${classes["text-dark"]} ${classes["border"]} ${classes["border-dark"]} ${classes["rounded-circle"]}`} style={{paddingBottom: "2px"}}>0</span>
                    </a>
                    <a href="" className={`${classes["btn"]} ${classes["px-0"]} ${classes["ml-2"]}`}>
                        <i className="fas fa-shopping-cart text-dark"></i>
                        <span className={`${classes["badge"]} ${classes["text-dark"]} ${classes["border"]} ${classes["border-dark"]} ${classes["rounded-circle"]}`} style={{paddingBottom: "2px"}}>0</span>
                    </a>
                </div>
            </div>
        </div>
        <div className={`${classes["row"]} ${classes["align-items-center"]} ${classes["bg-light"]} ${classes["py-3"]} ${classes["px-xl-5"]} ${classes["d-none"]} ${classes["d-lg-flex"]}`}>
            <div className={classes["col-lg-4"]}>
                <a href="" className={classes["text-decoration-none"]}>
                    <span className={`${classes["h1"]} ${classes["text-uppercase"]} ${classes["text-primary"]} ${classes["bg-dark"]} ${classes["px-2"]}`}>Multi</span>
                    <span className={`${classes["h1"]} ${classes["text-uppercase"]} ${classes["bg-primary"]} ${classes["text-dark"]} ${classes["px-2"]}${classes["ml-n1"]}`}>Shop</span>
                </a>
            </div>
            <div className={`${classes["col-lg-4"]} ${classes["col-6"]} ${classes["text-left"]}`}>
                <form action="">
                    <div className={classes["input-group"]}>
                        <input type="text" className={classes["form-control"]} placeholder="Search for products"/>
                        <div className={classes["input-group-append"]}>
                            <span className={`${classes["input-group-text"]} ${classes["bg-transparent"]} ${classes["text-primary"]}`}>
                            <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className={`${classes["col-lg-4"]} ${classes["col-6"]} ${classes["text-right"]}`}>
                <p className={["m-0"]}>Customer Service</p>
                <h5 className={["m-0"]}>+234 8035232311</h5>
            </div>
        </div>
    </div>
    <div className={`${classes["container-fluid"]} ${classes["bg-dark"]} ${classes["mb-30"]}`}>
        <div className={`${classes["row"]} ${classes["px-xl-5"]}`}>
            <div className={`${classes["col-lg-3"]} ${classes["d-none"]} ${classes["d-lg-block"]}`}>
                <a className={`${classes["btn"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-between"]} ${classes["bg-primary"]} ${classes["w-100"]}`} data-toggle="collapse" href="#navbar-vertical" style={{height: "65px", padding: "0 30px"}}>
                    <h6 className={`${classes["text-dark"]} ${classes["m-0"]}`}><i className="fa fa-bars mr-2"></i>Categories</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className={`${classes["collapse"]} ${classes["position-absolute"]} ${classes["navbar"]} ${classes["navbar-vertical"]} ${classes["navbar-light"]} ${classes["align-items-start"]} ${classes["p-0"]} ${classes["bg-light"]}`} id={"navbar-vertical"} style={{width: "calc(100% - 30px)", zIndex: "999"}}>
                    <div className={`${classes["navbar-nav"]} ${classes["w-100"]}`}>
                        <div className={`${classes["nav-item"]} ${classes["dropdown dropright"]}`}>
                            <a href="#" className={`${classes["nav-link"]} ${classes["dropdown-toggle"]}`} data-toggle="dropdown">Dresses <i className= "fa fa-angle-right float-right mt-1"></i></a>
                            <div className={`${classes["dropdown-menu"]} ${classes["position-absolute"]} ${classes["rounded-0"]} ${classes["border-0"]} ${classes["m-0"]}`}>
                                <a href="" className={classes["dropdown-item"]}>Men's Dresses</a>
                                <a href="" className={classes["dropdown-item"]}>Women's Dresses</a>
                                <a href="" className={classes["dropdown-item"]}>Baby's Dresses</a>
                            </div>
                        </div>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Shirts</a>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Jeans</a>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Swimwear</a>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Sleepwear</a>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Sportswear</a>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Jumpsuits</a>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Blazers</a>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Jackets</a>
                        <a href="" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Shoes</a>
                    </div>
                </nav>
            </div>
            <div className={["col-lg-9"]}>
                <nav className={`${classes["navbar"]} ${classes["navbar-expand-lg"]} ${classes["bg-dark"]} ${classes["navbar-dark"]} ${classes["py-3"]} ${classes["py-lg-0"]} ${classes["px-0"]}`}>
                    <a href="" className={`${classes["text-decoration-none"]} ${classes["d-block"]} ${classes["d-lg-none"]}`}>
                        <span className={`${classes["h1"]} ${classes["text-uppercase"]} ${classes["text-dark"]} ${classes["bg-light"]} ${classes["px-2"]}`}>Multi</span>
                        <span className={`${classes["h1"]} ${classes["text-uppercase"]} ${classes["text-light"]} ${classes["bg-primary"]} ${classes["px-2"]} ${classes["ml-n1"]}`}>Shop</span>
                    </a>
                    <button type="button" className={classes["navbar-toggler"]} data-toggle="collapse" data-target="#navbarCollapse">
                        <span className={classes["navbar-toggler-icon"]}></span>
                    </button>
                    <div className={`${classes["collapse"]} ${classes["navbar-collapse"]} ${classes["justify-content-between"]}`} 
                    id={"navbarCollapse"}>
                        <div className={`${classes["navbar-nav"]} ${classes["mr-auto"]} ${classes["py-0"]}`}>
                            <a href="index.html" className={`${classes["nav-item"]} ${classes["nav-link"]} ${classes["active"]}`}>Home</a>
                            <a href="shop.html" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Shop</a>
                            <a href="detail.html" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Shop Detail</a>
                            <div className={`${classes["nav-item"]} ${classes["dropdown"]}`}>
                                <a href="#" className={`${classes["nav-link"]} ${classes["dropdown-toggle"]}`} data-toggle="dropdown">Pages <i className= "fa fa-angle-down mt-1"></i></a>
                                <div className={`${classes["dropdown-menu"]} ${classes["bg-primary"]} ${classes["rounded-0"]} ${classes["border-0"]} ${classes["m-0"]}`}>
                                    <a href="cart.html" className={classes["dropdown-item"]}>Shopping Cart</a>
                                    <a href="checkout.html" className={classes["dropdown-item"]}>Checkout</a>
                                </div>
                            </div>
                            <a href="contact.html" className={`${classes["nav-item"]} ${classes["nav-link"]}`}>Contact</a>
                        </div>

                        <div className={`${classes["navbar-nav"]} ${classes["ml-auto"]} ${classes["py-0"]} ${classes["d-none"]} ${classes["d-lg-block"]}`}>
                            
                            <a href="" className={`${classes["btn"]} ${classes["px-0"]}`}>  
                            <span className= {classes["f-heart"]}>
                            <i className="fas fa-heart"></i>
                            </span>
                                <span className={`${classes["badge"]} ${classes["text-secondary"]} ${classes["border"]} ${classes["border-secondary"]} ${classes["rounded-circle"]}`} style={{paddingBottom: "2px"}}>0</span>
                            </a>
                            <a href="" className={`${classes["btn"]} ${classes["px-0"]} ${classes["ml-3"]}`}>
                                <span className= {classes["shopping-cart"]}>
                            <i className="fas fa-shopping-cart" ></i>
                            </span>
                                <span className={`${classes["badge"]} ${classes["text-secondary"]} ${classes["border"]} ${classes["border-secondary"]} ${classes["rounded-circle"]}`} style={{paddingBottom: "2px"}}>0</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    

        
                    
                    
                    

</Fragment>
)
}
export default MainNavigation;