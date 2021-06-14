import { fail } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { sleep, sleepRandomAmountOfSeconds } from "./sleep.ts";

Deno.test("sleep for 2 seconds", async (): Promise<void> => {

    const sleepStartAt = Date.now()
    await sleep(2)
    const sleepEndAt = Date.now()
    const sleepDuration = sleepEndAt - sleepStartAt
    if (sleepDuration < 2000 || sleepDuration > 2100){
        fail('you should somehow relax')
    }
});

Deno.test("sleep for random amount of seconds between 2 and 4 seconds", async (): Promise<void> => {

    const sleepStartAt = Date.now()
    await sleepRandomAmountOfSeconds(2, 4)
    const sleepEndAt = Date.now()
    const sleepDuration = sleepEndAt - sleepStartAt
    if (sleepDuration < 2000 || sleepDuration > 4100){
        fail('you should somehow relax')
    }
});
