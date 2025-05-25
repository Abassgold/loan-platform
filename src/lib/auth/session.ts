
export const isAuthenticated = async (token: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/authentication`,
         {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) return false

    return true;
};
