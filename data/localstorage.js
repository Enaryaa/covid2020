import localStorageDB from 'localstoragedb';
import axios from 'axios';
import "core-js/stable";
import "regenerator-runtime/runtime";

var lib = new localStorageDB("library", localStorage);

export async function initDB(){
    console.log('0')
    let {data} = await axios.get("https://api.covid19api.com/summary");
    lib.createTableWithData("pays", data.Countries);
    lib.insert("pays",data.Global);

    /*//pour chaque pays dans la table pays, inserer les données journalieres dans la table unpays
    let unpays = {};
    let pays = lib.queryAll("pays");
    pays.forEach(async function(element) {
        unpays[element] = await axios.get("https://api.covid19api.com/total/dayone/country/"+element.Country);
        console.log(unpays[element])
    })
    lib.createTableWithData("unpays", unpays);
    let test = lib.queryAll("unpays");
    console.log(unpays);
    */
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
export async function getCountry(country){
    console.log('1')

    //query localstorage
    if(lib.tableExists("unpays") == false){
        await initDB();
    }
    //6h old data ?
    let pays = lib.queryAll("unpays", {
        query: {Country: country}
    });
    if(checkDate(pays[0].Date)){
        console.log('2')
        return pays;
    }
    //update data
    else{
        console.log('3')
        lib.dropTable("unpays");
        initDB();
    }
}
