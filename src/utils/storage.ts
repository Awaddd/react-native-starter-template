import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageKey = string;
type StorageItem = string | number | boolean | any[] | object;

export const storeData = async (key: StorageKey, item: StorageItem) => {
  try {
    await AsyncStorage.setItem(`@${key}`, JSON.stringify(item));
  } catch (error) {}
};

export const readData = async <ResultType>(
  key: StorageKey,
): Promise<ResultType> => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (key: StorageKey) => {
  try {
    await AsyncStorage.removeItem(`@${key}`);
  } catch (error) {
    throw error;
  }
};
