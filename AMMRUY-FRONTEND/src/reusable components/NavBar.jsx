import React,{useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggler from "./DarkModeToggler";
import axios from "axios";
import logo from "../assets/logo.png";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
 
const navListMenuItems = [
  {
    title: "AC Repair",
    description: "Find the perfect solution for your needs.",
    links: "/ac-repair",
  },
  {
    title: "Fridge Repair",
    description: "Meet and learn about our dedication",
    links: "/fridge-repair",
  },
  {
    title: "Microwave Repair",
    description: "Find the perfect solution for your needs.",
    links: "/microwave-repair",
  },
  {
    title: "RO Repair",
    description: "Learn how we can help you achieve your goals.",
    links: "/ro-repair",
  },
  {
    title: "TV Repair",
    description: "Reach out to us for assistance or inquiries",
    links: "/tv-repair",
  },
  {
    title: "Washing Machine Repair",
    description: "Find the perfect solution for your needs.",
    links: "/washingmachine-repair",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ links, title, description }, key) => (
      <a key={key}>
        <MenuItem className="flex items-center rounded-lg hover:bg-black/10 pt-2 md:hover:text-black hover:text-white"  >
          <div >
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-semibold pl-3 m-1"
            >
              <Link to={links}>
              {title}
              </Link>
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 px-4 font-medium text-white-900 text-base hover:bg-slate-600/30"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-full md:w-64 rounded-xl lg:block ">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0 ">
            { renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{isMobileMenuOpen && renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className=" mb-8 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#hero"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center  gap-2 py-2 px-4 hover:bg-slate-600/30 hover:text-white text-base"><Link to="/">Home</Link></ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#contact"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center  gap-2 py-2 px-4 hover:bg-slate-600/30 hover:text-white text-base">
          Contact Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href=""
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center  gap-2 py-2 px-4 hover:bg-slate-600/30 hover:text-white text-base">
          <Link to="/about">About Us</Link>
        </ListItem>
      </Typography>
    </List>
  );
}
 
export function NavBar({hover, className}) {
  const [openNav, setOpenNav] = React.useState(false);
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`https://ammruy-1.onrender.com/logout`);
      localStorage.removeItem('token'); 
      setIsLoggedIn(false);
      alert("Logged out successfully");
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

 
  return <div>

    <Navbar className={`${className}  'z-[9999] z-[999] md:hidden' top-0 px-4 py-2 bg-[#00B09A] rounded-none`}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-xl hover:text-white"
        >
       <div className="flex flex-row items-center p-0 m-0">
       <img src={logo} alt="logo" className="max-w-[12%] pr-2" />
          {/* SharpCareer Solutions */}
          <Link to="/">SharpCareer Solutions</Link>
       </div>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <div className="ml-6"> */}
        {/* </div> */}
        <div className="hidden gap-2 lg:flex">
       <div>
       <DarkModeToggler/>
       </div>
       {!isLoggedIn ? (
    <>
      <Link to="/auth">
        <Button variant="text" color="blue-gray" className="bg-slate-600/20 hover:bg-slate-600/30 hover:text-white text-sm font-semibold px-7">
          Log In
        </Button>
      </Link>
      <Link to="/auth">
        <Button variant="gradient" className="bg-slate-600/20 hover:bg-slate-600/30 hover:text-white text-sm font-semibold px-7">
          Sign Up
        </Button>
      </Link>
    </>
  ) : (
    <Button onClick={handleLogout} className="text-base font-medium bg-slate-600/30 hover:bg-slate-600/50 pt-2" color="blue-gray">
      Log Out
    </Button>
  )}
        </div>
        <div className="lg:hidden absolute top-[8px] right-[49px]">
       <DarkModeToggler/>
       </div>
        <IconButton

          variant="text"
          color="blue-gray"
          className="lg:hidden pb-4 pr-6"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="hover:none lg:hidden">
       {openNav && <NavList />}
       {openNav && <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
          
        {!isLoggedIn ? (
                <>
                  <Button className="text-base font-medium bg-slate-600/30 hover:bg-slate-600/50 pt-2" color="blue-gray" fullWidth>
                    <Link to="/auth" className="hover:text-white">
                      Log In
                    </Link>
                  </Button>
                  <Button className="text-base font-medium bg-slate-600/30 hover:bg-slate-600/50" fullWidth>
                    <Link to="/auth" className="hover:text-white">
                      Sign Up
                    </Link>
                  </Button>
                </>
              ) : (
                <Button onClick={handleLogout} className="text-base font-medium bg-slate-600/30 hover:bg-slate-600/50 pt-2" color="blue-gray" fullWidth>
                  Log Out
                </Button>
              )}
        </div>}
        </div> 
      </Collapse>
    </Navbar>
    {className && <div className="pt-24"></div>}
    {/* </Navbar> */}
    </div>  
}