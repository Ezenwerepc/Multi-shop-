import { Fragment } from "react";
import classes from './index.module.css';




function Index ()  {
 return(
<Fragment>
<div className={`${classes["container-fluid"]} ${classes["mb-3"]}`}>
        <div className={`${classes["row"]} ${classes["px-xl-5"]}`}>
            <div className={classes["col-lg-8"]}>
                <div id={"header-carousel"} className={`${classes["carousel"]} ${classes["slide"]} ${classes["carousel-fade"]} ${classes["mb-30"]} ${classes["mb-lg-0"]}`} data-ride="carousel">
                    <ol className={classes["carousel-indicators"]}>
                        <li data-target="#header-carousel" data-slide-to="0" className={classes["active"]}></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className={classes["carousel-inner"]}>
                        <div className={`${classes["carousel-item"]} ${classes["position-relative"]} ${classes["active"]}`} style={{height: "430px"}}>
                            <img className={`${classes["position-absolute"]} ${classes["w-100"]} ${classes["h-100"]}`} src="assets/img/carousel-1.jpg" style={{objectFit: "cover"}}/>
                            <div className={`${classes["carousel-caption"]} ${classes["d-flex"]} ${classes["flex-column"]} ${classes["align-items-center"]} ${classes["justify-content-center"]}`}>
                                <div className={classes["p-3"]} style={{maxWidth: "700px"}}>
                                    <h1 className={`${classes["display-4"]} ${classes["text-white"]} ${classes["mb-3"]} ${classes["animate__animated"]} ${classes["animate__fadeInDown"]}`}>Men Fashion</h1>
                                    <p className={`${classes["mx-md-5"]} ${classes["px-5"]} ${classes["animate__animated"]} ${classes["animate__bounceIn"]}`}>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                    <a className={`${classes["btn"]} ${classes["btn-outline-light"]} ${classes["py-2"]} ${classes["px-4"]} ${classes["mt-3"]} ${classes["animate__animated"]} ${classes["animate__fadeInUp"]}`} href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${classes["carousel-item"]} ${classes["position-relative"]}`} style={{height: "430px"}}>
                            <img className={`${classes["position-absolute"]} ${classes["w-100"]} ${classes["h-100"]}`} src="assets/img/carousel-2.jpg" style={{objectFit: "cover"}}/>
                            <div className={`${classes["carousel-caption"]} ${classes["d-flex"]} ${classes["flex-column"]} ${classes["align-items-center"]} ${classes["justify-content-center"]}`}>
                                <div className={classes["p-3"]} style={{maxWidth: "700px"}}>
                                    <h1 className={`${classes["display-4"]} ${classes["text-white"]} ${classes["mb-3"]} ${classes["animate__animated"]} ${classes["animate__fadeInDown"]}`}>Women Fashion</h1>
                                    <p className={`${classes["mx-md-5"]} ${classes["px-5"]} ${classes["animate__animated"]} ${classes["animate__bounceIn"]}`}>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                    <a className={`${classes["btn"]} ${classes["btn-outline-light"]} ${classes["py-2"]} ${classes["px-4"]} ${classes["mt-3"]} ${classes["animate__animated"]} ${classes["animate__fadeInUp"]}`} href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${classes["carousel-item"]} ${classes["position-relative"]}`} style={{height: "430px,o"}}>
                            <img className={`${classes["position-absolute"]} ${classes["w-100"]} ${classes["h-100"]}`} src="assets/img/carousel-3.jpg" style={{objectFit: "cover"}}/>
                            <div className={`${classes["carousel-caption"]} ${classes["d-flex"]} ${classes["flex-column"]} ${classes["align-items-center"]} ${classes["justify-content-center"]}`}>
                                <div className={classes["p-3"]} style={{maxWidth: "700px"}}>
                                    <h1 className={`${classes["display-4"]} ${classes["text-white"]} ${classes["mb-3"]} ${classes["animate__animated"]} ${classes["animate__fadeInDown"]}`}>Kids Fashion</h1>
                                    <p className={`${classes["mx-md-5"]} ${classes["px-5"]} ${classes["animate__animated"]} ${classes["animate__bounceIn"]}`}>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                    <a className={`${classes["btn"]} ${classes["btn-outline-light"]} ${classes["py-2"]} ${classes["px-4"]} ${classes["mt-3"]} ${classes["animate__animated"]} ${classes["animate__fadeInUp"]}`} href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className={classes["col-lg-4"]}>
                <div className={`${classes["product-offer"]} ${classes["mb-30"]}`} style={{height: "200px"}}>
                    <img className={classes["img-fluid"]} src="assets/img/offer-1.jpg" alt=""/>
                    <div className={classes["offer-text"]}>
                        <h6 className={`${classes["text-white"]} ${classes["text-uppercase"]}`}>Save 20%</h6>
                        <h3 className={`${classes["text-white"]} ${classes["mb-3"]}`}>Special Offer</h3>
                        <a href="" className={`${classes["btn"]} ${classes["btn-primary"]}`}>Shop Now</a>
                    </div>
                </div>
                <div className={`${classes["product-offer"]} ${classes["mb-30"]}`} style={{height: "200px"}}>
                    <img className={classes["img-fluid"]} src="assets/img/offer-2.jpg" alt=""/>
                    <div className={classes["offer-text"]}>
                        <h6 className={`${classes["text-white"]} ${classes["text-uppercase"]}`}>Save 20%</h6>
                        <h3 className={`${classes["text-white"]} ${classes["mb-3"]}`}>Special Offer</h3>
                        <a href="" className={`${classes["btn"]} ${classes["btn-primary"]}`}>Shop Now</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
            
            <div className={`${classes["container-fluid"]} ${classes["pt-5"]}`}>
        <div className={`${classes["row"]} ${classes["px-xl-5"]} ${classes["pb-3"]}`}>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-6"]} ${classes["col-sm-12"]} ${classes["pb-1"]}`}>
                <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["bg-light"]} ${classes["mb-4"]}`} style={{padding: "30px"}}>
                    <span
                >
                    <h1 className={`${classes["text-primary"]} ${classes["m-0"]} ${classes["mr-3"]} ${"fa fa-check"}`}></h1>
                    </span>
                    <h5 className={`${classes["font-weight-semi-bold"]} ${classes["m-0"]}`}>Quality Product</h5>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-6"]} ${classes["col-sm-12"]} ${classes["pb-1"]}`}>
                <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["bg-light"]} ${classes["mb-4"]}`} style={{padding: "30px"}}>
                    <h1 className={`${"fa fa-shipping-fast"} ${classes["text-primary"]} ${classes["m-0"]} ${classes["mr-2"]}`}></h1>
                    <h5 className={`${classes["font-weight-semi-bold"]} ${classes["m-0"]}`}>Free Shipping</h5>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-6"]} ${classes["col-sm-12"]} ${classes["pb-1"]}`}>
                <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["bg-light"]} ${classes["mb-4"]}`} style={{padding: "30px"}}>
                    <h1 className={`${"fas fa-exchange-alt"} ${classes["text-primary"]} ${classes["m-0"]} ${classes["mr-3"]}`}></h1>
                    <h5 className={`${classes["font-weight-semi-bold"]} ${classes["m-0"]}`}>14-Day Return</h5>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-6"]} ${classes["col-sm-12"]} ${classes["pb-1"]}`}>
                <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["bg-light"]} ${classes["mb-4"]}`} style={{padding: "30px"}}>
                    <h1 className={`${"fa fa-phone-volume"} ${classes["text-primary"]} ${classes["m-0"]} ${classes["mr-3"]}`}></h1>
                    <h5 className={`${classes["font-weight-semi-bold"]} ${classes["m-0"]}`}>24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    <div className={`${classes["container-fluid"]} ${classes["pt-5"]}`}>
        <h2 className={`${classes["section-title"]} ${classes["position-relative"]} ${classes["text-uppercase"]} ${classes["mx-xl-5"]} ${classes["mb-4"]}`}><span className={`${classes["bg-secondary"]} ${classes["pr-3"]}`}>Categories</span></h2>
        <div className={`${classes["row"]} ${classes["px-xl-5"]} ${classes["pb-3"]}`}>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={classes["img-fluid"]} src="assets/img/cat-1.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={classes["img-fluid"]} src="assets/img/cat-2.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={classes["img-fluid"]} src="assets/img/cat-3.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={classes["img-fluid"]} src="assets/img/cat-4.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={classes["img-fluid"]} src="assets/img/cat-4.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={classes["img-fluid"]} src="assets/img/cat-3.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={["img-fluid"]} src="assets/img/cat-2.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={["img-fluid"]} src="assets/img/cat-1.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={["img-fluid"]} src="assets/img/cat-2.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={["img-fluid"]} src="assets/img/cat-1.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={["img-fluid"]} src="assets/img/cat-4.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <a className={classes["text-decoration-none"]} href="">
                    <div className={`${classes["cat-item"]} ${classes["img-zoom"]} ${classes["d-flex"]} ${classes["align-items-center"]} ${classes["mb-4"]}`}>
                        <div className={classes["overflow-hidden"]} style={{width: "100px", height: "100px"}}>
                            <img className={["img-fluid"]} src="assets/img/cat-2.jpg" alt=""/>
                        </div>
                        <div className={`${classes["flex-fill"]} ${classes["pl-3"]}`}>
                            <h6>Category Name</h6>
                            <small className={classes["text-body"]}>100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div className={`${classes["container-fluid"]} ${classes["pt-5"]} ${classes["pb-3"]}`}>
        <h2 className={`${classes["section-title"]} ${classes["position-relative"]} ${classes["text-uppercase"]} ${classes["mx-xl-5"]} ${classes["mb-4"]}`}><span className={`${classes["bg-secondary"]} ${classes["pr-3"]}`}>Featured Products</span></h2>
        <div className={`${classes["row"]} ${classes["px-xl-5"]}`}>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-1.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} {${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-2.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star-half-alt"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-3.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star-half-alt"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-4.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-5.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
            <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                    <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-6.jpg" alt=""/>
                    <div className={classes["product-action"]}>
                        <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                    </div>
                </div>
                <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                    <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                        <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                    </div>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star-half-alt"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
            <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                    <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-7.jpg" alt=""/>
                    <div className={classes["product-action"]}>
                        <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                    </div>
                </div>
                <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                    <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                        <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                    </div>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star-half-alt"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
            <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                    <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-8.jpg" alt=""/>
                    <div className={classes["product-action"]}>
                        <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                    </div>
                </div>
                <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                    <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                        <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                    </div>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><div className={`${classes
        ["container-fluid"]} ${classes["pt-5"]} ${classes["pb-3"]}`}>
        <div className={`${classes["row"]} ${classes["px-xl-5"]}`}>
            <div className={classes["col-md-6"]}>
                <div className={`${classes["product-offer"]} ${classes["mb-30"]}`} style={{height: "300px"}}>
                    <img className={classes["img-fluid"]} src="assets/img/offer-1.jpg" alt=""/>
                    <div className={classes["offer-text"]}>
                        <h6 className={`${classes["text-white"]} ${classes["text-uppercase"]}`}>Save 20%</h6>
                        <h3 className={`${classes["text-white"]} ${classes["mb-3"]}`}>Special Offer</h3>
                        <a href="" className={`${classes["btn"]} ${classes["btn-primary"]}`}>Shop Now</a>
                    </div>
                </div>
            </div>
            <div className={classes["col-md-6"]}>
                <div className={`${classes["product-offer"]} ${classes["mb-30"]}`} style={{height: "300px"}}>
                    <img className={classes["img-fluid"]} src="assets/img/offer-2.jpg" alt=""/>
                    <div className={classes["offer-text"]}>
                        <h6 className={`${classes["text-white"]} ${classes["text-uppercase"]}`}>Save 20%</h6>
                        <h3 className={`${classes["text-white"]} ${classes["mb-3"]}`}>Special Offer</h3>
                        <a href="" className={`${classes["btn"]} ${classes["btn-primary"]}`}>Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={`${classes["container-fluid"]} ${classes["pt-5"]} ${classes["pb-3"]}`}>
        <h2 className={`${classes["section-title"]} ${classes["position-relative"]} ${classes["text-uppercase"]} ${classes["mx-xl-5"]} ${classes["mb-4"]}`}><span className={`${classes["bg-secondary"]} ${classes["pr-3"]}`}>Recent Products</span></h2>
        <div className={`${classes["row"]} ${classes["px-xl-5"]}`}>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                    <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-1.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} {${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-2.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star-half-alt"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-3.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star-half-alt"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-4.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
                <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                    <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                        <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-5.jpg" alt=""/>
                        <div className={classes["product-action"]}>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                        </div>
                    </div>
                    <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                        <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                            <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                        </div>
                        <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
            <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                    <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-6.jpg" alt=""/>
                    <div className={classes["product-action"]}>
                        <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                    </div>
                </div>
                <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                    <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                        <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                    </div>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star-half-alt"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
            <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                    <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-7.jpg" alt=""/>
                    <div className={classes["product-action"]}>
                        <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                    </div>
                </div>
                <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                    <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                        <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                    </div>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star-half-alt"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes["col-lg-3"]} ${classes["col-md-4"]} ${classes["col-sm-6"]} ${classes["pb-1"]}`}>
            <div className={`${classes["product-item"]} ${classes["bg-light"]} ${classes["mb-4"]}`}>
                <div className={`${classes["product-img"]} ${classes["position-relative"]} ${classes["overflow-hidden"]}`}>
                    <img className={`${classes["img-fluid"]} ${classes["w-100"]}`} src="assets/img/product-8.jpg" alt=""/>
                    <div className={classes["product-action"]}>
                        <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"fa fa-shopping-cart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`} href=""><i className={"far fa-heart"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-sync-alt"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-outline-dark"]} ${classes["btn-square"]}`}href=""><i className={"fa fa-search"}></i></a>
                    </div>
                </div>
                <div className={`${classes["text-center"]} ${classes["py-4"]}`}>
                    <a className={`${classes["h6"]} ${classes["text-decoration-none"]} ${classes["text-truncate"]}`} href="">Product Name Goes Here</a>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mt-2"]}`}>
                        <h5>$123.00</h5><h6 className={`${classes["text-muted"]} ${classes["ml-2"]}`}><del>$123.00</del></h6>
                    </div>
                    <div className={`${classes["d-flex"]} ${classes["align-items-center"]} ${classes["justify-content-center"]} ${classes["mb-1"]}`}>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small classNames={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"fa fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                        <small className={`${"far fa-star"} ${classes["text-primary"]} ${classes["mr-1"]}`}></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={`${classes["container-fluid"]} ${classes["bg-dark"]} ${classes["text-secondary"]} ${classes["mt-5"]} ${classes["pt-5"]}`}>
        <div className={`${classes["row"]} ${classes["px-xl-5"]} ${classes["pt-5"]}`}>
            <div className={`${classes["col-lg-4"]} ${classes["col-md-12"]} ${classes["mb-5"]} ${classes["pr-3"]} ${classes["pr-xl-5"]}`}>
                <h5 className={`${classes["text-secondary"]} ${classes["text-uppercase"]} ${classes["mb-4"]}`}>Get In Touch</h5>
                <p className={classes["mb-4"]}>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                <p className={classes["mb-2"]}><i className={`${"fa fa-map-marker-alt"} ${classes["text-primary"]} ${classes["mr-3"]}`}></i>Enugu, Nigeria</p>
                <p className={classes["mb-2"]}><i className={`${"fa fa-envelope"} ${classes["text-primary"]} ${classes["mr-3"]}`}></i>info@nigeriamarketplace.com</p>
                <p className={classes["mb-0"]}><i className={`${"fa fa-phone-alt"} ${classes["text-primary"]} ${classes["mr-3"]}`}></i>+2348035232311</p>
            </div>
            <div className={`${classes["col-lg-8"]} ${classes["col-md-12"]}`}>
                <div className={classes["row"]}>
                    <div className={`${classes["col-md-4"]} ${classes["mb-5"]}`}>
                        <h5 className={`${classes["text-secondary"]} ${classes["text-uppercase"]} ${classes["mb-4"]}`}>Quick Shop</h5>
                        <div className={`${classes["d-flex"]} ${classes["flex-column"]} ${classes["justify-content-start"]}`}>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${"fa fa-angle-right"} ${classes["mr-2"]}`}></i>Home</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${"fa fa-angle-right"} ${classes["mr-2"]}`}></i>Our Shop</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${"fa fa-angle-right"} ${classes["mr-2"]}`}></i>Shop Detail</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${"fa fa-angle-right"} ${classes["mr-2"]}`}></i>Shopping Cart</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${"fa fa-angle-right"} ${classes["mr-2"]}`}></i>Checkout</a>
                            <a className={classes["text-secondary"]} href="#"><i className={`${"fa fa-angle-right"} ${classes["mr-2"]}`}></i>Contact Us</a>
                        </div>
                    </div>
                    <div className={`${classes["col-md-4"]} ${classes["mb-5"]}`}>
                        <h5 className={`${classes["text-secondary"]} ${classes["text-uppercase"]} ${classes["mb-4"]}`}>My Account</h5>
                        <div className={`${classes["d-flex"]} ${classes["flex-column"]} ${classes["justify-content-start"]}`}>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${"fa fa-angle-right"} ${classes["mr-2"]}`}></i>Sign in</a>
                            <a className={`${classes["text-secondary"]} ${classes["mb-2"]}`} href="#"><i className={`${"fa fa-angle-right"} ${classes["mr-2"]}`}></i>Sign out</a> 
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
                            <a className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["btn-square"]} ${classes["mr-2"]}`} href="#"><i className={"fab fa-twitter"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["btn-square"]} ${classes["mr-2"]}`} href="#"><i className={"fab fa-facebook-f"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["btn-square"]} ${classes["mr-2"]}`} href="#"><i className={"fab fa-linkedin-in"}></i></a>
                            <a className={`${classes["btn"]} ${classes["btn-primary"]} ${classes["btn-square"]}`} href="#"><i className={"fab fa-instagram"}></i></a>
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
    <a href="#" className={`${classes["btn"]} ${classes["btn-primary"]} ${"back-to-top"}`}><i className={"fa fa-angle-double-up"}></i></a>

              
</Fragment>

 )
}
export default Index;