
import React from 'react';
import { ThemeSwitch } from './ThemeSwitch';


const Navbar = () => {
    return (
        <div>
  


<div className='flex justify-between  p-4 w-11/12 mx-auto'>
    <div>
        <h1>Logo</h1>
    </div>
    <div>
        <ul className='flex gap-3 '>
            <li>Ideas</li>
            <li>Add Ideas</li>
            <li>My Ideas</li>
            <li>My Interactions</li>
        </ul>
    </div>

 <div>
    <ul className='flex gap-3 justify-center items-center'>
        <li>Login</li>
        <li>Register</li>
        <li>
             <ThemeSwitch></ThemeSwitch>
        </li>
    </ul>
    
     </div>
  
</div>
  
        
</div>
    );
};

export default Navbar;