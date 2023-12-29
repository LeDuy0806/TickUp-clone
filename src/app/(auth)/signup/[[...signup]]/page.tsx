import { SignUp } from "@clerk/nextjs";

// type Props = {}

const SignUpPage: React.FC = (props) => {
  return <SignUp redirectUrl="/dashboard" />;
};

export default SignUpPage;
