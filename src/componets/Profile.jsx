import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:5000/user/details"; // Replace with actual API URL

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) throw new Error("Token not found");

       const decodedToken = jwtDecode(token);
 // Debugging: Check what is inside the token
const userId = decodedToken?.id || decodedToken?.userId;


        if (!userId) throw new Error("Invalid token");

        const response = await fetch(`${API_URL}/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch user details");

        setUser(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
          localStorage.removeItem("token"); // Destroy the token
    window.location.href = "/login"; 
  };

  if (loading) return <div className="flex justify-center items-center h-screen text-gray-700">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h2>
        <div className="mb-4">
          <p className="text-gray-600 text-lg font-medium">{user.name}</p>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
