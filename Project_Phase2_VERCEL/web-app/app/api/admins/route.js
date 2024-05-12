import toysRepo from "../../repo/toysrepo"

export async function GET(request) {
    const admins = await toysRepo.getAdmins(); 
    return Response.json(admins);
}