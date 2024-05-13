import Cookies from "js-cookie";
import {OLD_LIT_AT, OLD_LIT_RT} from "@/config";
import {useRouter} from "next/navigation";

const useAuth = () => {
  const userJson = Cookies.get(OLD_LIT_AT);
  const user = userJson ? JSON.parse(userJson) : "";
  const isAuthenticated = !!user;

  const router = useRouter();

  const logout = () => {
    Cookies.remove(OLD_LIT_AT);
    Cookies.remove(OLD_LIT_RT);
    router.replace("/login");
  };

  return {
    user,
    isAuthenticated,
    logout,
  };
};

export default useAuth;
