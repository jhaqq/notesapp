import React from "react";
import { MdTransferWithinAStation } from "react-icons/md";
import Note from "./note";

const Header = ({ handleDarkMode, handleCount }) => {
    return (
        <div className="header">
            <div className="name-and-counter">
                <h1>Notes</h1>
                <span 
                className="save count"
                >{handleCount}</span>
            </div>
            <button 
            className="save"
            id="toggle"
            onClick={() => 
                handleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )
            }
            >Toggle Mode</button>
        </div>
    );
}
export default Header;