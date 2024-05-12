import toysRepo from "../../repo/toysrepo"

export async function POST(request){
    const salehistory=await request.json();
    
    const newsalehistory=await toysRepo.addSaleHistory(salehistory);

    return Response.json(newsalehistory,{status: 200})
}

export async function POST(request){
    const item=await request.json();
   
    return Response.json(item,{status: 200})
}