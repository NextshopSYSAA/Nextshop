import MyComponent from "../components/categories";
import Categories from "../components/categories";
import Hero from "../components/hero";
import Nav from "../components/nav";
import New from "../components/new";
import Over from "../components/over";
import Product from "../components/product";
import Sales from "../components/sales";


export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>{children}
</body>
        
      </html>
    );
  }
  