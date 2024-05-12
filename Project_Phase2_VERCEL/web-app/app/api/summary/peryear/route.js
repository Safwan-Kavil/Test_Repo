import toysRepo from "../../../repo/toysrepo.js"

export async function GET(request) {
    const year = await toysRepo.getYear(); 
    return Response.json(year);
}