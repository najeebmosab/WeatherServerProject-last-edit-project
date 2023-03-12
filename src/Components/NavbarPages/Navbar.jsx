import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useMemo, useRef, useState, useContext } from 'react';
import { FlagContext } from "../GlobalVirable/Global";

function Navbar() {
    const navBar = useRef(null);
    const btn = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const flagContext = useContext(FlagContext);
    const icon = useRef(null);
    useEffect(() => {
        function handleScroll() {
            // Code to handle scroll event
            console.log(typeof Number(window.scrollY.toFixed(0)));
            navBar.current.style.zIndex = "3";
            if (Number(window.scrollY.toFixed(0)) < 40) {
                return navBar.current.classList.remove("scrollNavbar");
            }
            else {
                return navBar.current.classList.add("scrollNavbar");

            }
        }
        if (location.pathname === '/chosePage') {
            dBlock()
        } else {
            dNone()
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function dBlock(locations) {
        btn.current.classList.remove("d-none")
        navigate(`/${locations}`, { replace: true });

    }

    function dNone() {
        btn.current.classList.add("d-none")
        navigate("/", { replace: true });

    }

    return (<>
        <nav className="navBar" ref={navBar}>
            <section>
                <a className="navBarHover" onClick={dNone} >Severe Weather</a>

                <a className="navBarHover" onClick={()=>{
                    dBlock("chosePage")
                }}  >Country</a>

                <a className="navBarHover" onClick={()=>{
                    dBlock("WeatherServer")
                }} >Weather Server</a>
            </section>
            <section>
                <button ref={btn} className={"navBarHover d-none"} onClick={() => {
                    flagContext.setFlag(!flagContext.flag);
                }}><FontAwesomeIcon ref={icon} icon={faBars} /></button>
            </section>
        </nav>

        <Outlet></Outlet>


    </>)
}
export { Navbar }

