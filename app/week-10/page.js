"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import React from "react";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

  async function gitHubLogin() {
    await gitHubSignIn();
  }

  async function googleLogin() {
    await googleSignIn();
  }

  async function logout() {
    await firebaseSignOut();
  }

  // Display some of the user's information
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {user ? (
        <div className="flex flex-col">
          <p className="text-2xl font-semibold mb-10">
            Welcome, {user.displayName}!
          </p>
          <div className="text-center bg-[#D1D8C5] hover:bg-[#BBC6A7] hover:cursor-pointer rounded py-2 mb-5">
            <Link href="/week-9/shopping-list">Go to Shopping List</Link>
          </div>
          <button
            onClick={logout}
            className="bg-[#BBC6A7] hover:bg-[#D1D8C5] text-gray-700 font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <button
            onClick={gitHubLogin}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Login with GitHub
          </button>
          <button
            onClick={googleLogin}
            className="bg-white hover:bg-gray-200 font-bold py-2 px-4 rounded"
          >
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
}
