"use client";
import { SignIn } from "@clerk/nextjs";

// type Props = {}

const LoginPage: React.FC = (props) => {
  return <SignIn redirectUrl="/dashboard" />;
};

export default LoginPage;
