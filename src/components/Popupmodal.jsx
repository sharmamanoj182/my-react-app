import React from 'react';
import { Link } from 'react-router-dom';
import "../css/popupmodal.css";
import closeicon from '../images/v2_close_24.svg';

function Popupmodal() {
    return(
    <div>
        <Link to="/">Back</Link>
        <div className='popupstart'>
            <div className='popbackground'></div>
        <div className="baseStructurePopup">
            <div className='titlepre'>popup title will come here</div>
            <div className="v2_close" onClick={() => window.location.href='/'}>
                <img src={closeicon}/>
            </div>
            <div className='scrollarea'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nibh felis. Cras id condimentum metus. Maecenas convallis, lectus at ultrices pharetra, nulla arcu porta dolor, in molestie nunc ipsum vel dui. Sed iaculis aliquet sollicitudin. Vivamus at libero volutpat, consectetur mi at, volutpat est. Donec volutpat quam in quam dapibus, at ultricies nisl mollis. Aliquam erat volutpat. Etiam feugiat sem non justo fermentum condimentum. Nam orci ex, blandit vitae condimentum a, malesuada in ipsum.
              
            </div>
        </div>

  </div>
  </div>
  );
}

export default Popupmodal;