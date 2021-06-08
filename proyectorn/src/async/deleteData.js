export async function deleteData(id) {
    try {
      let deleteContacto = this.state.almacenar.filter((dato) => {return dato.login.uuid !== id})
      this.setState({almacenar : deleteContacto})
      
    } catch(e) {
      console.log(e)
    }
  }
  //Sobreeescribir contactos almacenando todos los contactos menos el que elimine -> setItem(contactos)
  // saveItem pero la key no es contacto sino borrados (cambiar save por set)