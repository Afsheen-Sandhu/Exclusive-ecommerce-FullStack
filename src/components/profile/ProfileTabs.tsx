import { User, Package } from "lucide-react";

type Props = {
  activeTab: "info" | "orders";
  setActiveTab: (tab: "info" | "orders") => void;
};

export default function ProfileTabs({ activeTab, setActiveTab }: Props) {
  return (
    <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8 max-w-md">
      <button
        onClick={() => setActiveTab("info")}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex-1 justify-center ${
          activeTab === "info"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        <User size={18} />
        <span>Personal Info</span>
      </button>
      <button
        onClick={() => setActiveTab("orders")}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex-1 justify-center ${
          activeTab === "orders"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        <Package size={18} />
        <span>Orders</span>
      </button>
    </div>
  );
}