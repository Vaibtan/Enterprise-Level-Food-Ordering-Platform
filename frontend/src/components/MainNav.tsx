import { Button } from "./ui/button";

const MainNav = () => {
    return (
        <Button 
            variant = "ghost" 
            className = "font-bold text-2xl hover:text-orange-500 hover:bg-white">
                Login 
        </Button>
    );
};

export default MainNav;