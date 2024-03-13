"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/auth";
import bcrypt from "bcryptjs";

export const handleLogout = async () => {
  "use server";
  console.log("logout")
  await signOut();
};


