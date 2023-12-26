// I buy and sell https://FreedomCash.org
export function sleep(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}
export function sleepRandomAmountOfSeconds(minimumSeconds: number, maximumSeconds: number) {
  const secondsOfSleep = getRandomArbitrary(minimumSeconds, maximumSeconds)
  return new Promise((resolve) => setTimeout(resolve, secondsOfSleep * 1000))
}
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}