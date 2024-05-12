import toysRepo from "../../../repo/toysrepo.js"

export async function GET(request) {
    const location = await toysRepo.getLocation(); 
    return Response.json(location);
}