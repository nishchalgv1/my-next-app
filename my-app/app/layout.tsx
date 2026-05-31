<<<<<<< HEAD


function RootLayout({children}
    :{children: React.ReactNode}
){
    return (
        <html>
            <body>
                
                {children}
            </body>
        </html>
    )
}
=======
import Navbar from "@/components/Navbar";

function RootLayout({children} : {
  children: React.ReactNode
}){
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}

>>>>>>> f6c75dcb0fb84966274ec727d6fa74c4e277cbeb
export default RootLayout;