"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import UserItems from "./components/UserItems";

export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function Page() {
  const [users, setUsers] = useState<Array<UserType>>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=16").then((res) => {
      setUsers(
        res.data.users.map((user: UserType) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        }))
      );
    });
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-between px-10 p-2 gap-5 mx-auto">
      {users.map((user: UserType) => (
        <UserItems key={user.id} item={user} />
      ))}
    </div>
  );
}
