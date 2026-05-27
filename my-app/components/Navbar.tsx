import Link from "next/link";

function Navbar(){
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <br />
                <li>
                    <Link href="/about">About</Link>
                </li>
                <br />
                <li>
                     <Link href="/contact">Contact</Link>
                </li>
                <br />
                <li>
                     <Link href="/services">Services</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;

// task: 

// fetch the users from dummyjson

