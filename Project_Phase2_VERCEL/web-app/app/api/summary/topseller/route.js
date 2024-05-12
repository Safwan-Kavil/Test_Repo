import toysRepo from "../../../repo/toysrepo.js"

export async function GET(request) {
    const topSeller = await toysRepo.getTopSeller(); 
    return Response.json(topSeller);
}