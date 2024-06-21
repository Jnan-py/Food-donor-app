import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e,email,password,role) => {
    e.preventDefault();
    try{
        if (!role) {
            return alert("Please select a role");
        }
        if (!email || !password){
            return alert("Please enter all fields");
        }
        store.dispatch(userLogin({email,password,role}));
    }catch(error){
        console.log(error);
    }
};

export const handleRegister = (e,name,role,email,password,organisationName,trustsName,address,phone) => {
    e.preventDefault();
    try{
        if (!role) {
            return alert("Please select a role");
        }
        if (!email || !password || !address || !phone){
            return alert("Please enter all fields");
        }
        if (role==="Organisation" && !organisationName){
            return alert("Please enter all fields");
        }
        if ((role==="Admin" || role==="Donor") && !name){
            return alert("Please enter all fields");
        }
        if (role==="CharitableTrusts" && !trustsName){
            return alert("Please enter all fields");   
        }
        if (password.length !== 10) {
            return alert("The password should be of minimum 8 digits");
        }
        if (phone.length !== 10) {
            return alert("The Phone Number should be of 10 digits");
        }
        
        store.dispatch(userRegister({name,role,email,password,organisationName,trustsName,address,phone}));
    }catch(error){
        console.log(error);
    }
};