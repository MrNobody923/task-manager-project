import {
    IconLayoutGrid,
    IconSettings2,
    IconTimelineEvent,
    IconUsers,
  } from "@tabler/icons-react";
  import { Link, NavLink } from "react-router-dom";
  
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  import { Separator } from "@/components/ui/separator";
  
  type SidebarLinkType = {
    name: string;
    icon: any;
    to: string;
    separator?: boolean;
  };
  
  const SidebarLink: SidebarLinkType[] = [
    {
      name: "Dashboard",
      icon: IconLayoutGrid,
      to: "/admin/dashboard",
    },
    {
      name: "Users",
      icon: IconUsers,
      to: "/admin/userTable",
      separator: true,
    },
    {
      name: "Settings",
      icon: IconSettings2,
      to: "/settings",
    },
  ];
  
  const Sidebar = () => {
    return (
      <div className="h-full shadow w-[4rem] bg-[#2e41cf]">
        <TooltipProvider delayDuration={0}>
          <div className="grid place-items-center h-[4rem] w-[4rem]">
          </div>
          <ul className="grid place-content-center">
            {SidebarLink.map((link) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <li key={link.name}>
                    <NavLink
                      to={link.to}
                      className="grid place-items-center w-[2.5rem] h-[2.5rem] rounded-lg hover:bg-zinc-100"
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? "#202020" : "transparent",
                        color: isActive ? "white" : "black",
                      })}
                    >
                      <link.icon size={20} />
                    </NavLink>
                    {link.separator && (
                      <Separator className="mx-auto w-[1rem] my-2" />
                    )}
                  </li>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <span className="text-sm">{link.name}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </TooltipProvider>
      </div>
    );
  };
  
  export default Sidebar;