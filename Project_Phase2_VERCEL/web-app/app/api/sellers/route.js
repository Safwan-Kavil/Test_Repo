import toysRepo from "../../repo/toysrepo"

export async function GET(request) {
    const sellers = await toysRepo.getSellers(); 
    return Response.json(sellers);
}

