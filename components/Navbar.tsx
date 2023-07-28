import {UserButton} from "@clerk/nextjs";

const Navbar = () => {
    return (
         <div className="flex p-4 justify-between bg-gray-50">
            <h2>Ecommerce</h2>
            <UserButton afterSignOutUrl="/"/></div>
    )
}

export default Navbar;