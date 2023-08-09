import {UserButton} from "@clerk/nextjs";

import MainNav from "@/components/main-nav";


const Navbar = () => {
    return (
         <div className="flex p-4 items-center justify-between bg-gray-50">
            <div>this is store switcher</div>
            <MainNav className="mx-6"/>
            <div className="ml-auto flex items-center space-x-4">
                <UserButton afterSignOutUrl="/"/>
            </div>
            
            </div>
    )
}

export default Navbar;