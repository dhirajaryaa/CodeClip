import {
  Logo,
  NavLinks,
  ProfileSettings,
  Sidebar,
} from "@/components/custom";

export const DashboardLayout = ({children}) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] overflow-hidden">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            {/* logo */}
            <Logo />
          </div>
          <div className="flex-1 p-4">
            {/* links  */}
            <NavLinks />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {/* sidebar  */}
        <Sidebar />

        {/* user setting popup */}
        <ProfileSettings />

        {/* dashboard content  */}
        {children}
      </div>
    </div>
  );
};
