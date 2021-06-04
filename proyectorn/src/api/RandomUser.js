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
// async storeData(value){
//     try{
      
//       const jsonContacts = JSON.stringify(value);
      
//       //queremos que se pusheen los contactos en un array asi no se pisan. 
//       const arrayImportar = this.state.importar.push(jsonContacts)
//       console.log(arrayImportar)
      
//       await AsyncStorage.setItem("contactos", jsonContacts);
//     } catch(e) {
//       console.log(e)
//     }
//   }