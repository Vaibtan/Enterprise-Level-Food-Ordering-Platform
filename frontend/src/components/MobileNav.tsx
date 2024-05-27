import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
//import { useAuth0 } from "@auth0/auth0-react";
//import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className = "space-y-3">
        <SheetTitle>
            <span> Welcome to DilliEats.com!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;