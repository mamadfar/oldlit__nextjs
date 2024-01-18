import Cookies from "js-cookie";
import { OLD_LIT_U } from "@/config";
import {useRouter} from "next/navigation";

const useAuth = () => {
  const userJson = Cookies.get(OLD_LIT_U);
  const user = userJson ? JSON.parse(userJson) : "";
  const isAuthenticated = !!user;

  const router = useRouter();

  const logout = () => {
    Cookies.remove(OLD_LIT_U);
    router.replace("/login");
  };

  return {
    user,
    isAuthenticated,
    logout,
  };
};

export default useAuth;
