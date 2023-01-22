import React from "react";
import { Container } from "reactstrap"
import classes from "./header.module.css";
import Link from "next/link";

const NAV__LINK = [
    {
        path: "/",
        display: "Home",
      },
      {
        path: "../week/Week2",
        display: "Week2",
      },
      {
        path: "../week/Week3",
        display: "Week3",
      },
      {
        path: "../week/Week4",
        display: "Week4",
      },
      {
        path: "#contact",
        display: "Contact",
      },
    ];
        
           
const Header = () => {
    return (
        <header className={`${classes.header}`}>
        <Container>
            <div className={`${classes.nav__wrapper}`}>
            {/* ======== navigation logo ======== */}
            <div className={`${classes.logo}`}>
                <h1>
                <span>H</span>arlam
                </h1>
            </div>

            {/* ========= nav menu =========== */}
            <div 
            className={`${classes.navigation}`}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
               
                <div className={`${classes.nav__right}`}>
                    <p className=" d-flex align-items-center gap-2 mb-0">
                    {" "}
                    <i className="ri-phone-line"></i> +7862398197{" "}
                    </p>
                </div>
                </div>
            </div>
            </div>
        </Container>
        </header>
    );
};

    export default Header;