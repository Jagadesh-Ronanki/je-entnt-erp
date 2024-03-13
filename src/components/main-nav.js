import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { NavigationMenuLink } from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

function MainNav({ className, ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setCurrentPath(currentPath);
  }, []);

  return (
    <>
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" size="icon" variant="outline" onClick={toggleMenu}>
          <MenuIcon />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="grid gap-2 py-6">
          <NavigationLink href="/dashboard">Dashboard</NavigationLink>
          <NavigationLink href="/products">Products</NavigationLink>
          <NavigationLink href="/orders">Orders</NavigationLink>
        </div>
      </SheetContent>
    </Sheet>
    <nav className={`hidden md:flex items-center space-x-4 lg:space-x-6 ${className}`} {...props}>
      <a href="/dashboard" className={`text-sm font-medium transition-colors hover:text-primary ${currentPath === '/dashboard' ? 'text-primary' : 'text-muted-foreground'}`}>
        Dashboard
      </a>
      <a href="/products" className={`text-sm font-medium transition-colors hover:text-primary ${currentPath === '/products' ? 'text-primary' : 'text-muted-foreground'}`}>
        Products
      </a>
      <a href="/orders" className={`text-sm font-medium transition-colors hover:text-primary ${currentPath === '/orders' ? 'text-primary' : 'text-muted-foreground'}`}>
        Orders
      </a>
    </nav>
    </>
  );
}

export default MainNav;


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function NavigationLink({ href, children }) {
  return (
    <a href={href} passHref>
      <a className="flex w-full items-center py-2 text-lg font-semibold">{children}</a>
    </a>
  );
}

function NavigationMenuItem({ href, children }) {
  return (
    <NavigationMenuLink asChild>
      <a href={href} passHref>
        <a className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">{children}</a>
      </a>
    </NavigationMenuLink>
  );
}