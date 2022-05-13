import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
        <div className="wrapper">
            <div className="left">
                <a href="#introPart" className="logo">Portfolio.</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span> +1-224-532-1569</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span> 2020.syed.hussaini@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
