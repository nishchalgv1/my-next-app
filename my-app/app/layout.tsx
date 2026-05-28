// It's a server side rendering
// server side component

import Naviagtion from "../components/Navigation"

// {children}: render the current page here
//{children}: take children from the props obj
// TypelAnnotation:  {children:React.ReactNode}
// children must be valid React content
/**
 * React.ReactNode means anything React can render:

JSX
text
numbers
components
fragments
arrays
null
 */
import "./globals.css"
export default function RootLayout({children}:{
  children:React.ReactNode
}){
  return (
    <html>
      <body>
        {/* <p>Hello Layout</p> */}
        {/* <Naviagtion/> */}
        {children}
      </body>
    </html>
  )
}

// layout.js file -- actual app ka structure
// define kr rha