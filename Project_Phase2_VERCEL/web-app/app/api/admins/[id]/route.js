import toysRepo from "../../repo/toysrepo"

export async function GET(request) {
    const admins = 1
    return Response.json(admins);
}