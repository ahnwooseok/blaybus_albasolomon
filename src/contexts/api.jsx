import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_DEV_BACKEND_URL;


export const UserSignInBySocial = (token, type)=>{
    return axios.post(BACKEND_URL+`user/sign_in_by_social`, {
        access_token: token,
        SnsType: "kakao",
        Token: token,
        // OsType: "Web",
        OsType: type,
        CurrentVersion: "Sellkey",
    });
}