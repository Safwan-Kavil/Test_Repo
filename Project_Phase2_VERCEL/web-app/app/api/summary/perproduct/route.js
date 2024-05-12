import toysRepo from "../../../repo/toysrepo"

export async function GET(request) {
    const perProduct = await toysRepo.purchasePerProduct(); 
    return Response.json(perProduct);
}