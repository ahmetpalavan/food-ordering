import ExitToApp from "@mui/icons-material/ExitToApp";
import Home from "@mui/icons-material/Home";
import Key from "@mui/icons-material/Key";
import Moped from "@mui/icons-material/Moped";
import { useFormik } from "formik";
import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Account from "../../components/profile/Account";
import Order from "../../components/profile/Order";
import Password from "../../components/profile/Password";
import profilSchema from "../../schema/profile";
import axios from "axios";

const Profile = ({ user }) => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [tabs, setTabs] = useState(0);

  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 3000));
    actions.resetForm();
    // console.log(values, actions, "ahmetsdasd");
  };

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      person: "",
      date: "",
    },
    onSubmit,
    validationSchema: profilSchema,
  });

  const handleSignOut = () => {
    if (confirm("Are you sure?")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  };

  useEffect(() => {
    if (!session) {
      push("/auth/login");
    }
  }, [session, push]);

  return (
    <div className="flex px-10 min-h-[calc(100vh-_-433px)] lg:flex-row flex-col lg:mb-10">
      <div className="flex-shrink-0 lg:w-80 w-100">
        <div className="relative flex flex-col items-center px-10 py-5 border-2 border-b-0">
          <Image className="rounded-full" width={100} height={100} alt="" src={user?.image ? user?.image : "/images/profile.png"} priority />
          <b className="mt-1 text-2xl">{user?.fullName}</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            onClick={() => setTabs(0)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
          >
            <Home />
            <button className="ml-1 ">Account</button>
          </li>
          <li
            onClick={() => setTabs(1)}
            cclassName={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
          >
            <Key />
            <button className="ml-1">Password</button>
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
          >
            <Moped />
            <button className="ml-1">Orders</button>
          </li>
          <li
            onClick={handleSignOut}
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
          >
            <ExitToApp />
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>

      {tabs === 0 && <Account user={user} />}
      {tabs === 1 && <Password user={user} />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export async function getServerSideProps({ req, params }) {
  const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`);

  return {
    props: {
      user: user ? user.data : null,
    },
  };
}

export default Profile;
