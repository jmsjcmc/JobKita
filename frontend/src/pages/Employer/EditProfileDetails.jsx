import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function EditProfileDetails({
  formData,
  handleImageChange,
  handleInputChange,
  handleSave,
  handleCancel,
  saving,
  uploading,
}) {
  return (
    <DashboardLayout activeMenu={"company-profile"}>
      {formData && (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
                <h1 className="text-lg md:text-xl font-medium text-white">
                  Edit Profile
                </h1>
              </div>
              {/* Edit Form */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h2 className="text-lg font-medium text-gray-800 border-b pb-2">
                      Personal Information
                    </h2>
                    {/* Avatar Upload */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={formData.avatar}
                          alt="Avatar"
                          className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                        />
                        {uploading?.avatar && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full fle"></div>
                        )}
                      </div>
                      <div>
                        <label className="">
                          <span className="">Choose avatar</span>
                          <input 
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, 'avatar')}
                          className=""/>
                        </label>
                      </div>
                    </div>
                    {/* Name Input */}
                    <div>
                      <label className="">
                        Full Name
                      </label>
                      <input type="text" value={formData.name} className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
