// import React from 'react'
// import 'C:/Users/KAUSTUBH/Desktop/tedx webd/tedx/src/navbar.css';
// import logo from '../src/Images/navbar logo.png';
// import log from '../src/Images/lines.jpg';


// const navbar = () => {
//   function myFunction() 
// {
//     const x = document.getElementById("hash");
//     x.classNameList.toggle("responsive");
// }
//   return (
//     <>
//         <div className='top' id='hash'>
//          <img src={logo} alt="Logo" className='Navbar-Logo'/>
//         <div className='Sub'>
//         <a className='Navbar-about'>HOME</a>
//         <a className='Navbar-about' href='#About'>ABOUT</a>
//         <a className='Navbar-about' href='#Contact'>CONTACT US</a>
       
//         </div>
//         <div > 
//         <img src={log} className='log' onclick = "myFunction()"/>
//         </div>
//         <hr />
//         </div> 
        
        
//     </>
//   )
// }

// export default navbar;



import React,{useState} from 'react'
import 'C:/Users/KAUSTUBH/Desktop/tedx webd/tedx/src/navbar.css';
 import logo from '../src/Images/navbar logo.png';
 import log from '../src/Images/lines.jpg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`top ${isMenuOpen ? 'responsive' : ''}`} id='hash'>
      <div className='toper'>
      <img src={logo} alt="Logo" className='Navbar-Logo' />
      <img src={log} className='log' onClick={handleMenuToggle} />
      </div>
      <div className={`Sub ${isMenuOpen ? 'responsive' : ''}`}>
        <a className='Navbar-about'>HOME</a>
        <a className='Navbar-about' href='#About'>ABOUT</a>
        <a className='Navbar-about' href='#Contact'>CONTACT US</a>
      </div>
      <div>
      </div>
     
    </div>
  );
};

export default Navbar;

