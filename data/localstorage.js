import localStorageDB from 'localstoragedb';
import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";

var lib = new localStorageDB("library", localStorage);

export async function initDB(){
    let {data} = await axios.get("https://api.covid19api.com/summary");
    lib.createTableWithData("pays", data.Countries);
    lib.insert("pays",data.Global);
    lib.commit();
}
function checkDate(date){
    let dataDate = new Date(date);
    let currentDate = new Date();
    const milliseconds = Math.abs(dataDate - currentDate);
    const hours = milliseconds / 36e5;
    if(hours >= 6.0)
        return false;
    return true;
}
export async function getCountries(){
    //query localstorage
    if(lib.tableExists("pays") == false){
        await initDB();
    }
    //6h old data ?
    let pays = lib.queryAll("pays");
    if(checkDate(pays[0].Date)){
        return pays;
    }
    //update data
    else{
        lib.dropTable("pays");
        initDB();
    }
}