import {getData} from '../api/RandomUser';

export async function getDataFromApi() {
    this.setState({activity: true})
    let usuarios = await getData();
    this.setState({contactos: usuarios, activity: false})
  }