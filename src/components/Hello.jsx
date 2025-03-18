import React from 'react';
import { Link } from 'react-router-dom';
import logonew from '../images/modified-id-logo.svg';
import MobileNavbar from './MobileNavbar';

function Hello() {
    return <div className="mainpage">
        <MobileNavbar />
    
        <div className="idlogo">
            <img src={logonew} />  
            <span>ID UI System</span>        
        </div>

<div className='linkbox'>
    <div>
    <Link onClick={() => window.location.href='/popupmodal'}>popup modal</Link>

    <a onClick={() => window.location.href='/loderui'}>Loaders ui</a>
    <a>Loader with animation - 1</a>
    <a>Loader with animation - 2</a>
    <a>Loader with animation - 3</a>
    <a>Button</a>
    <a>Card</a>
    <a>Pagination</a>
  
    </div>

    <div>
    <a>Accordion</a>
    <a>Breadcrumb</a>
    <a>Dropdown</a>
    <a>Forms</a>   
    <a>Alert Box</a>   
    <a>Close Button</a>
    <a>Tabs</a>
    <a>Chips</a>
    </div>
    </div>



    </div>;
}

export default Hello;