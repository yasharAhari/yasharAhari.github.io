import React,{Component} from "react";
import "./navbar.css";

import githubLogo from "./github.png";
import linkedInLogo from "./LI-In-Bug.png"

export default class NavBar extends Component{
    render() {
        return(
            <div className="nb-navbar">
                <div className="nb-name">
                    <h2 className="nb-name-text">Yashar G. Ahari</h2>
                </div>

                <div className="nb-external">
                    <a href="https://github.com/yasharAhari/" rel="noreferrer" target="_blank"><img src={githubLogo}/></a>
                    <a href="https://www.linkedin.com/in/yasharahari" rel="noreferrer" target="_blank"><img height="32px" src={linkedInLogo}/></a>
                </div>
            </div>
        );
    }
}