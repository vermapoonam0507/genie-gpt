import { createContext, useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { dummyUserData, dummyChats} from "../assets/assets";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const fetchUser = async () => {
    setUser(dummyUserData); //remove it after creating login and signup for see the user data
    // setUser()  //after creating login and signup , now comment this line and uncomment the above line

  
  };
  const fetchUsersChats = async () => {
    setChats(dummyChats);
    setSelectedChat(dummyChats[0]);   //remove it at the chatbox component creating
    // setSelectedChat()
  };

  useEffect(() =>{
    if(theme === "dark"){
        document.documentElement.classList.add("dark");
    }else{
        document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme])


  useEffect(() => {
    if(user){
        fetchUsersChats();
    }
    else{
        setChats([])
        setSelectedChat(null);
    }
  }, [user]);

  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    fetchUser,
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    theme, 
    setTheme
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
