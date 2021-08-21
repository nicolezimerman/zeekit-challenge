export interface Session {
  keyName: string;
  defaultValue: number;
}
export const useSession = ({ keyName, defaultValue }: Session) => {
  let getter: number = defaultValue;

  const dataFound = sessionStorage.getItem(keyName);
  if (dataFound) {
    getter = Number.parseInt(JSON.parse(dataFound));
  }

  const setter = (keyValue: string) => {
    try {
      sessionStorage.setItem(keyName, JSON.stringify(keyValue));
    } catch (error) {
      console.log(error);
    }
    getter = Number.parseInt(keyValue);
  };

  const cleaner = () => {
    sessionStorage.removeItem(keyName);
  };

  return { getter, setter, cleaner };
};
