import React from 'react'

const footer = () => {
  return (
    <footer className="footerContainer">
      <div>
       <ul className="listFooter">
         <li> Home </li>
         <li> About </li>
         <li> Sign in </li>
         <li> Sign up </li>                  
       </ul>
      </div>
      <div>
        <ul className="listSocialFooter">
         <li>Facebook</li>
         <li>Twitter</li>
        </ul>
      </div>
      <div>
       Copyright &copy; Blockchain Technologies {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default footer
