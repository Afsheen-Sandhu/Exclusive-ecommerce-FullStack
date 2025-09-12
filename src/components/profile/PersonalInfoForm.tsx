import { useState, useEffect } from "react";
import { User, Mail, Lock, Save, Eye, EyeOff, UserCheck } from "lucide-react";
import { InputField } from "../ui/inputs";
import { Button } from "../ui/buttons";
import ProfileImage from "./ProfileImage";
import axios from "axios";
import { toast } from "react-hot-toast";

type Props = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

export default function PersonalInfoForm({ user, setUser }: Props) {
  const [loading, setLoading] = useState(false);
  const [formChanged, setFormChanged] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false
  });

  useEffect(() => {
    setFormChanged(false);
  }, [user]);

  const handleInputChange = () => {
    setFormChanged(true);
  };

  const togglePasswordVisibility = (field: 'old' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Prepare data to send
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("newPassword") || undefined,
      profilePic: user.profilePic,
    };

    try {
      const res = await axios.put("/api/auth/update", data, { withCredentials: true });
      if (res.data.user) {
        setUser(res.data.user);
        toast.success("Profile updated successfully!");
        // Navigate to home page after successful save
        window.location.href = "/";
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Profile Image */}
          <div className="lg:col-span-4">
            <ProfileImage user={user} onUpload={setUser} />
          </div>

          {/* Center: Profile Form */}
          <div className="lg:col-span-5">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <User className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                    <p className="text-gray-600 text-sm">Update your account details</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                    <User size={16} />
                    <span>Full Name</span>
                  </label>
                  <InputField
                    defaultValue={user.name}
                    name="name"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                    <Mail size={16} />
                    <span>Email Address</span>
                  </label>
                  <InputField
                    defaultValue={user.email}
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Password Section */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Lock className="text-orange-600" size={16} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Old Password */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Current Password</label>
                      <div className="relative">
                        <InputField
                          name="oldPassword"
                          type={showPasswords.old ? "text" : "password"}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200"
                          placeholder="Enter current password"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('old')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.old ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* New Password */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">New Password</label>
                      <div className="relative">
                        <InputField
                          name="newPassword"
                          type={showPasswords.new ? "text" : "password"}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200"
                          placeholder="Enter new password"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('new')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.new ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                      <div className="relative">
                        <InputField
                          name="confirmPassword"
                          type={showPasswords.confirm ? "text" : "password"}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200"
                          placeholder="Confirm new password"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('confirm')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="solid"
                    
                    className={`w-full flex items-center justify-center space-x-2 py-4 font-semibold rounded-lg transition-all duration-200 ${
                      loading 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : formChanged 
                          ? "bg-primary hover:bg-blue-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5" 
                          : "bg-gray-500 text-white "
                    }`}
                    label="Save Changes"
                    size="md"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Save size={18} />
                        <span>Save Changes</span>
                      </>
                    )}
                  </Button>
                </div>

                {loading && (
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Updating your profile...</p>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right: Welcome Panel */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg p-8 h-fit">
              <div className="text-center">
                <div className="w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
                <p className="text-lg font-medium text-blue-100 mb-4">{user.name} 👋</p>
                <p className="text-sm text-blue-100 opacity-90 leading-relaxed">
                  Manage your personal information, update your password, and keep your account secure all in one place.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-500 border-opacity-30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-200">Account Status</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}