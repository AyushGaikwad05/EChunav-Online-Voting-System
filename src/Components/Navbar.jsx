    import React from 'react'
    import Logo from './../assets/images/rembg-echunav.png'
    import './../Components/Navbar.css'
    function Navbar() {




        return (

            <>
                <div className='NavBar'>
                    <a href="/candidates"> <img clas
                        src={Logo}
                        alt="eChunav Logo"
                        className="NavLogo"
                    /></a>
                   
                    <div className="nav-links"> {/* New container for links */}
            <a href="http://localhost:5173/result">Results</a>
            <a href='http://localhost:5173/profile'>Profile</a>
        </div>
                


                </div>
            </>
        )


    }

    export default Navbar;