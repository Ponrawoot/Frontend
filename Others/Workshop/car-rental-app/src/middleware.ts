export { default } from 'next-auth/middleware'

// must sign in on the path only

export const config = {
    matcher: ["/reservations/manage"]
}