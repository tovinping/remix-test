export function sleep(timer: number, data?: any) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, timer);
  })
}