import logonew from '../images/modified-id-logo.svg';

function Hello() {
    return <div className="mainpage">
        <div className="idlogo">
            <img src={logonew} />  
            <span>ID UI System</span>        
        </div>

<div className='linkbox'>
    <div>
    <a>popup modal</a>
    <a>Loaders ui</a>
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