import { startMongo } from "$lib/db/mongo";

startMongo().then(() => {
	console.log('Mongo started');
}).catch(e => {console.error(e)});startMongo().then(()=>{
    console.log('Mongo Started');
})