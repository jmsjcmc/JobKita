import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Briefcase, Building2, LogOut } from "lucide-react";
import { NAVIGATION_MENU } from "../../utils/data";

export default function DashboardLayout({ activeMenu }) {
  const NavigationItem = ({ item, isActive, onClick, isCollapsed }) => {
    const Icon = item.icon
    return <button
    onClick={() => onClick(item.id)}
    className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
        isActive
        ? 'bg-blue-50 text-blue-700 shadow-sm shadow-blue-50'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`}>
        <Icon className={`h-5 w-5 flex-shrink-0 ${
            isActive 
            ? 'text-blue-600'
            : 'text-gray-500'
        }`}/>
        {!isCollapsed && <span className="ml-3 truncate">{item.name}</span>}
    </button>
  };
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(activeMenu || "dashboard");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropdownOpen) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileDropdownOpen]);

  const handleNavigation = (itemId) => {
    setActiveNavItem(itemId);
    navigate(`/${itemId}`);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarCollapsed = !isMobile && false;
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 transform ${
          isMobile
            ? sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"
        } ${
          sidebarCollapsed ? "w-16" : "w-64"
        } bg-white border-r border-gray-200`}
      >
        {/* Company Logo */}
        <div className="flex items-center h-16 border-b border-gray-200 pl-6">
          {!sidebarCollapsed ? (
            <Link className="flex items-center space-x-3" to="/">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="text-gray-900 font-bold text-xl">Job Kita</span>
            </Link>
          ) : (
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
              <Building2 className="h-5 w-5 text-white" />
            </div>
          )}
        </div>
        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {NAVIGATION_MENU.map((item) => (
            <NavigationItem 
            key={item.id}
            item={item}
            isActive={activeNavItem === item.id}
            onClick={handleNavigation}
            isCollapsed={sidebarCollapsed}
            />
          ))}
        </nav>
        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
            onClick={logout}
          >
            <LogOut className="h-5 w-5 flex-shrink-0 text-gray-500 " />
            {!sidebarCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
