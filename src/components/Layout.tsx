import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isDark, setIsDark } = useTheme();
  return (
    <div>
      <div className="flex justify-center my-10">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={ `${navigationMenuTriggerStyle()}`}>
                <NavLink to="/"
                  className={({ isActive }) => isActive ? "active" : ""}
                >Home</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <NavLink to="/add"
                  className={({ isActive }) => isActive ? "active" : ""}
                >Add Employees</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <NavLink to="/all"
                  className={({ isActive }) => isActive ? "active" : ""}
                >View All Employees</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <NavLink to="/restore"
                  className={({ isActive }) => isActive ? "active" : ""}
                >Deleted Employees</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Button variant={"ghost"} className="hover:bg-primary hover:text-white cursor-pointer p-4 rounded-full" onClick={()=>{setIsDark(!isDark)}}>
                  {
                    isDark ? <SunMedium /> : <MoonStar />
                  }
                  
                </Button>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="container mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout