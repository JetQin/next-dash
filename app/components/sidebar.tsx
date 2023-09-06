'use client'
import { ReactElement, useState } from 'react';
import { IconType } from 'react-icons';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export interface SideBarItem{
    icon: ReactElement,
    text?: string
}

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaFire size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip' }: SideBarItem) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <div className={active ? "sidebar-icon group active:bg-green-900": "sidebar-icon group"} onClick={handleClick}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  )
};


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
