import toysRepo from "../../repo/toysrepo"

export async function GET(request) {
    const customers = await toysRepo.getCustomers(); 
    return Response.json(customers);
}