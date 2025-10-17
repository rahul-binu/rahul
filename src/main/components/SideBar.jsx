import { HiMenu, HiUser, HiCalendar, HiHome, HiCog, HiLogout } from "react-icons/hi";
import { useUI } from "../context/UIContext";

function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen, setIsModalOpen } = useUI();
  const { APP_NAME } = useUI();
  const menuItems = [
    { id: 1, label: "Dashboard", icon: <HiHome />, onClick: () => { } },
    { id: 2, label: "Account", icon: <HiUser />, onClick: () => { } },
    { id: 3, label: "New Event", icon: <HiCalendar />, onClick: () => setIsModalOpen(true) },
    { id: 4, label: "Settings", icon: <HiCog />, onClick: () => { } },
    { id: 5, label: "Logout", icon: <HiLogout />, onClick: () => alert("Logging out...") },
  ];

  return (
    <div
      style={{
        width: isSidebarOpen ? "220px" : "60px",
        transition: "width 0.3s",
      }}
      className="bg-gray-900 text-white h-screen flex flex-col shadow-lg"
    >
      {/* Header / Logo */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        {isSidebarOpen && <h2 className="text-lg font-bold">{APP_NAME}</h2>}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white hover:text-blue-400"
        >
          {isSidebarOpen ? "×" : <HiMenu size={24} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={item.onClick}
              className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-800 rounded-md transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer (optional user info) */}
      <div className="px-4 py-3 border-t border-gray-700">
        {isSidebarOpen && (
          <div className="text-xs text-gray-400">
            Logged in as <span className="font-semibold">Rahul</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
