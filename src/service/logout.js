import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const logout = async () => {
  try {
    await signOut(auth);
    alert("You have been logged out successfully!");
    // Optional: Redirect to the home page or login page
    window.location.href = "/";
  } catch (error) {
    console.error("Error logging out: ", error);
    alert("Failed to log out. Please try again.");
  }
};

export default logout;
