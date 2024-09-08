import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from './groupsGetAll';
import { AppError } from '@utils/AppError';

export async function groupCreate(newGroup: string) {
  try{
    //armazenando na variavel todos os grupos que ja estao salvos
    const storedGroups = await groupsGetAll();
    
    //verifica se esta incluso
    const groupAlreadyExist = storedGroups.includes(newGroup);
    
    if (groupAlreadyExist) {
      //App error e a classe criada 
      throw new AppError("Ja existe um grupo com esse nome!");
    }

    //transformando em string ja que o groupsGetAll retorna um objeto
    //pegando tudo que esta na string e o novo grupo e adicionando em storage
    const storage = JSON.stringify([...storedGroups, newGroup]);

    //setando no armazenamento o storage passando a chave de referencia
    await AsyncStorage.setItem(GROUP_COLLECTION, storage); //chave unica e o valor

  }catch(error){
    throw error;
  }
}