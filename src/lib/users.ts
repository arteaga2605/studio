// This is a mock user database. In a real application,
// you would use a proper database and authentication service.
export const users: { [key: string]: { password: string; role: 'admin' | 'user' } } = {
    "admin@ejemplo.com": { password: "admin", role: "admin" },
    "user@ejemplo.com": { password: "user", role: "user" },
    "daniel@ejemplo.com": { password: "22021655", role: "admin" },
};
