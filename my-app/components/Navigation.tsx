import Link from "next/link"
export default function Naviagtion(){
    return (
        <header className="grid grid-cols-2">
            <div></div>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/">Home Page</Link>
                        
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}