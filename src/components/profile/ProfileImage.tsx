"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, Upload, Check } from "lucide-react";
import { Button } from "../ui/buttons";
import { InputField } from "../ui/inputs";
import axios from "axios";
import { toast } from "react-hot-toast";

type Props = {
  user: any;
  onUpload?: (updatedUser: any) => void;
};

export default function ProfileImage({ user, onUpload }: Props) {
  const [preview, setPreview] = useState("/av1.png");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  // Update preview when user changes
  useEffect(() => {
    if (user?.profilePic) setPreview(user.profilePic);
  }, [user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/profile/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.url) {
        toast.success("Image uploaded successfully!");
        // Immediately update profilePic in DB and get updated user
        const updateRes = await axios.put(
          "/api/auth/update",
          { profilePic: res.data.url },
          { withCredentials: true }
        );

        if (updateRes.data.user && onUpload) {
          onUpload(updateRes.data.user); // Update parent with updated user object
        }
        
        // Clear the file state after successful upload
        setFile(null);
      } else {
        toast.error("Failed to upload image.");
      }
    } catch (err) {
      console.error("Upload failed:", err);
      toast.error("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">Profile Picture</h2>
        <p className="text-gray-600 mt-1">Update your profile photo</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        <div className="space-y-8">
          {/* Profile Image Display */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="relative">
                <Image
                  src={preview}
                  alt="Profile Picture"
                  width={120}
                  height={120}
                  className="rounded-full object-cover border-4 border-white shadow-lg ring-4 ring-blue-100 transition-all duration-200 group-hover:ring-blue-200"
                />
                
                {/* Camera overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <Camera className="text-white" size={24} />
                </div>
              </div>
              
              {/* Upload indicator */}
              {file && (
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg">
                  <Check size={16} />
                </div>
              )}
            </div>
          </div>

          {/* Drag and Drop Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
              isDragOver
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-full ${isDragOver ? "bg-blue-100" : "bg-gray-100"} transition-colors duration-200`}>
                <Upload className={`${isDragOver ? "text-blue-600" : "text-gray-600"} transition-colors duration-200`} size={32} />
              </div>
              
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Drop your image here, or{" "}
                  <label className="text-blue-600 hover:text-blue-700 cursor-pointer font-semibold">
                    browse
                    <InputField 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>

              {file && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 w-full max-w-xs">
                  <p className="text-green-800 text-sm font-medium flex items-center">
                    <Check size={16} className="mr-2" />
                    {file.name}
                  </p>
                  <p className="text-green-600 text-xs mt-1">
                    Ready to upload ({(file.size / 1024 / 1024).toFixed(1)}MB)
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Upload Button */}
          {file && (
            <div className="flex justify-center">
              <Button
                type="submit"
                label={loading ? "Uploading..." : "Upload Image"}
                className={`px-8 py-3 font-semibold rounded-lg transition-all duration-200 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                }`}
                disabled={loading}
              />
            </div>
          )}

          {loading && (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              <span className="text-gray-600">Processing your image...</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}