import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupsGetAll() {
  try{
    // await - espere ate que a busca dos dados esteja pronta 
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    
    //armazenamos nessa chave os conteudos do storage 
    const groups: string[] = storage ? JSON.parse(storage) : [];
    return groups;
  } catch (error) {
    throw error;
  }
}