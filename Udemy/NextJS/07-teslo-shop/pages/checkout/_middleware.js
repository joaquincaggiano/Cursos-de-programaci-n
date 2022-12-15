// Next
import { NextResponse } from "next/server";

// Utils
import { jwt } from "../../utils";

export async function middleware(req, event) {
    const {token = ""} = req.cookies;

    try {
        await jwt.isValidToken(token);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(`/auth/login?p=${req.page.name}`) 
    }
}