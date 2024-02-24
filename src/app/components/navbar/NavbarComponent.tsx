'use client'
import ImageNext from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import styles from "./NavbarComponent.module.css"
import {useState} from "react";

export default function NavbarComponent() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {description:"Youtube", url:"https://www.youtube.com/channel/UCcQifbSRJXkn4UxzaCQbeSA", color:'foreground' as 'foreground'},
    {description:"Instagram", url:"https://www.instagram.com/julioperez.dev/", color:'foreground' as 'foreground'},
    {description:"Descargar Ebook", url:"#", color:'primary' as 'primary'},
    {description:"Ver Contenido", url:"https://www.youtube.com/channel/UCcQifbSRJXkn4UxzaCQbeSA", color:'foreground' as 'foreground'},
    {description:"Asesoria", url:"https://calendly.com/julioperez-contact/30min", color:'foreground' as 'foreground'},
    {description:"Ropa de Programador", url:"https://julioperez.flashcookie.com", color:'danger' as 'danger'},
  ];



  const download = (filename:any, content:any) => {
    var element = document.createElement("a");
    element.setAttribute("href", content);
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const handleDownload = async (e:any) => {
    try {
      const result = await fetch("/documento.pdf", {
        method: "GET",
        headers: {}
      });
      const blob = await result.blob();
      const url = URL.createObjectURL(blob);
      download("Roadmap-Programación-Julio-Pérez", url);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  const preHandleDownload = async (e:any, url:any) => {
    if(url === "#") handleDownload(e);
  };



  return (
    <div className={styles.base}>
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <ImageNext src="/logo.png" width={50} height={60} alt="julio perez logo" />

            <p className="font-bold text-inherit">JULIO PEREZ</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#" onClick={handleDownload}>
              Descargar Ebook
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="https://www.youtube.com/channel/UCcQifbSRJXkn4UxzaCQbeSA" aria-current="page">
              Youtube
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="https://www.instagram.com/julioperez.dev/">
              Instagram
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={item.color}
                className="w-full"
                href={item.url}
                size="lg"
                onClick={(e)=>preHandleDownload(e, item.url)}
              >
                {item.description}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  )
}