import MinBar from "./components/MinBar/MinBar";
import NavBar from "./components/navbarseller/navBarseller";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
export default function SellerLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body> <MinBar/> 
                <NavBar/>
            <PrimeReactProvider>
        {children}
          </PrimeReactProvider>
        </body>
        {/* // need the footer  */}
      </html>
    );
  }
  