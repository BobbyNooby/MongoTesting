import { testDB } from "$lib/db/dbhandler";
import type { WithId } from "mongodb";
import type { PageServerLoad } from "./$types";

export const load :PageServerLoad = async function()  {
    const data = await testDB.find({}, {limit : 10,projection : {_id : 0} }).toArray();

    console.log(data);

    return {testDB: data}
    
}
