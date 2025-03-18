import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Loaderui.css";
import loadcircleimg from '../images/newloading1.gif';
import MobileNavbar from './MobileNavbar';

function Loderui() {
    return(
    <div>
          <MobileNavbar />
         
        <Link to="/">Back</Link>
    
            <div className="wrapperload ">
                <div className="imagebox"><img src={loadcircleimg} /> </div>
                <div className="pleasewait">Hold tight, while we are fetching best
                    plans for you...</div>
            </div>

  </div>
  );
}

export default Loderui;