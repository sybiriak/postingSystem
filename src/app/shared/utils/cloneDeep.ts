export const cloneDeep = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
}
