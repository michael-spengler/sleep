import { sleepRandomAmountOfSeconds } from "https://deno.land/x/sleep/mod.ts";

console.log('I should sleep')
await sleepRandomAmountOfSeconds(2, 4, true)
console.log('Good Morning :)')

