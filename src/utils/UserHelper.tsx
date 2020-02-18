import JwtDecode from "jwt-decode";

export const isLoggedIn = () => !!localStorage.getItem("token");

interface IToken {
	userId: string;
	iat: number;
}

export const getId = () => JwtDecode<IToken>(localStorage.getItem("token") || "").userId;
