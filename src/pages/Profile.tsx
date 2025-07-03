import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, BarChart3, User } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedStandard, setSelectedStandard] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 pb-20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="text-center py-4">
          <h1 className="text-lg font-semibold text-gray-900">Your Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-6 pb-8">
        <div className="max-w-sm mx-auto">
          {/* UID Display */}
          <div className="mb-6 bg-white rounded-xl p-4 card-shadow animate-fade-in">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">User ID</p>
              <p className="text-lg font-medium text-gray-900 font-mono">abc123xyz</p>
            </div>
          </div>

          {/* Board Selection */}
          <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Select Board
            </label>
            <Select value={selectedBoard} onValueChange={setSelectedBoard}>
              <SelectTrigger className="w-full h-12 bg-white rounded-xl border-gray-200 card-shadow">
                <SelectValue placeholder="Choose your board" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cbse">CBSE</SelectItem>
                <SelectItem value="icse">ICSE</SelectItem>
                <SelectItem value="state">State</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Standard Selection */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Select Standard
            </label>
            <Select value={selectedStandard} onValueChange={setSelectedStandard}>
              <SelectTrigger className="w-full h-12 bg-white rounded-xl border-gray-200 card-shadow">
                <SelectValue placeholder="Choose your class" />
              </SelectTrigger>
              <SelectContent>
                {[6, 7, 8, 9, 10, 11, 12].map((std) => (
                  <SelectItem key={std} value={std.toString()}>
                    Class {std}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Save Button */}
          <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-xl card-shadow">
              Update
            </Button>
          </div>

          {/* Upgrade Button (Hidden/Disabled) */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              disabled 
              className="w-full h-12 text-lg font-semibold rounded-xl opacity-50 cursor-not-allowed"
            >
              Upgrade Account
            </Button>
          </div>

          {/* Powered by Growth Tutorials */}
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-xs text-gray-500">Powered by Growth Tutorials</p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 z-50">
        <div className="flex justify-around items-center max-w-sm mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex flex-col items-center space-y-1 tap-highlight"
          >
            <Home className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Home</span>
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="flex flex-col items-center space-y-1 tap-highlight"
          >
            <BarChart3 className="w-6 h-6 text-gray-600" />
            <span className="text-xs text-gray-600">Dashboard</span>
          </button>
          <button className="flex flex-col items-center space-y-1 tap-highlight">
            <User className="w-6 h-6 text-primary" />
            <span className="text-xs text-primary font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;