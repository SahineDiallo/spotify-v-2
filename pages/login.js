import React from "react";
import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div className="d-flex align-items-center justify-content-center bg-black login__container">
      <div className="login__content">
        <img src="https://links.papareact.com/9xl" alt="spotify-logo" />
        {Object.values(providers).map((provider) => (
          <button
            onClick={signIn(provider.id, { callbackUrl: "/" })}
            key={provider.name}
          >
            Sign in with {provider.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
