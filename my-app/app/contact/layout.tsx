
function ContactLayout({children}:{
    children: React.ReactNode
}){
    return (
        <>
        <html>
            <body>
                <h1>Hello From Contact Layout</h1>
                {children}
            </body>
        </html>
        </>
    )
}

export default ContactLayout;