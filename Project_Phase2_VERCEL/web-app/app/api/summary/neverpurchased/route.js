import toysRepo from "../../../repo/toysrepo.js"

export async function GET(request) {
    const product= await toysRepo.getNeverPurchased(); 
    return Response.json(product);
}