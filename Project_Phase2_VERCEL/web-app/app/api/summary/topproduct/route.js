import toysRepo from "../../../repo/toysrepo.js"

export async function GET(request) {
    const topProduct = await toysRepo.getTop(); 
    return Response.json(topProduct);
}