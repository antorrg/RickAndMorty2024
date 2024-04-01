import { Home, UserHome } from "./index";
import { useAuth } from "../components/Auth/AuthContext/AuthContext";
import { enviarInfoAlServer } from "../utils/Index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, limpiarLogin } from "../Redux/actions";
import InactivityDetector from "../components/Inactivity/InactivityDetector";
import inacStyle from "../components/Inactivity/Inactivity.module.css";
const Landing = () => {
  const { user, authenticated } = useAuth();
  const dispatch = useDispatch();
  //console.log(user)
  //console.log(authenticated)

  useEffect(() => {
    const fetchUserLog = async () => {
      if (authenticated) {
        try {
          dispatch(login(user));
        } catch (error) {
          // Maneja el error según tus necesidades
          console.error("Error al obtener información del usuario:", error);
        }
      } else {
        dispatch(limpiarLogin());
      }
    };

    fetchUserLog();
  }, [authenticated, user, dispatch]);

  return (
    <InactivityDetector>
      {(inactive) => (
        <div>
          {inactive ? (
                <>
                <h2 style={{textAlign: 'center', marginTop: '50vh'}}>Lleva tiempo inactivo,¿desea seguir?</h2>
                </>
          ) : authenticated ? (
            <UserHome />
          ) : (
            <Home />
          )}
        </div>
      )}
    </InactivityDetector>
  );
};

export default Landing;
//