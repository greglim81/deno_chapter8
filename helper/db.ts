import { MongoClient, Collection } from "https://deno.land/x/mongo@v0.9.1/mod.ts";

interface ProductSchema {
    _id: { $oid: string };
    name: string;
    description: string;
    price: number;
  }
  
  let productsCollection : Collection<ProductSchema>; 
  
  export function connect(){
      const client = new MongoClient();
      client.connectWithUri("mongodb+srv://newuser1:uTSXeKFWdmz2wvWa@cluster0.vxjpr.mongodb.net/?retryWrites=true&w=majority");    
      
      const db = client.database("products");
          
      productsCollection = db.collection<ProductSchema>("products");            
  }
    
  function getProductsCollection(){ 
      return productsCollection;
  }
      
  export default getProductsCollection;
  
