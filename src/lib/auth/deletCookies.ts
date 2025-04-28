import { cookies } from "next/headers";

export const deleteCookie = async () => {
    (await cookies()).delete( 'authToken');
}