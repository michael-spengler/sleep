import * as log from "https://deno.land/std/log/mod.ts";

export function sleep(seconds: number){
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

export function sleepRandomAmountOfSeconds(minimumSeconds: number, maximumSeconds: number, sleepLog: boolean = false){
    const secondsOfSleep = getRandomArbitrary(minimumSeconds, maximumSeconds)
    if (sleepLog){
        log.info(`I will sleep for ${secondsOfSleep} seconds.`)
    }
    return new Promise((resolve) => setTimeout(resolve, secondsOfSleep * 1000))
}

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min
}


