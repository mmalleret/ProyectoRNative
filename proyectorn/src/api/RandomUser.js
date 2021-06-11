export async function getData() {
    try{
    
    let resultado = await fetch("https://randomuser.me/api/?results=5");
    let json = await resultado.json();
    console.log(json);
    return json.results
    
    }catch(e){
        console.log('error:' + e)
    }  

} 