import { expect } from "https://deno.land/x/expect/mod.ts";

expect(10).toEqual(10);
expect(Promise.resolve(20)).resolves.toEqual(20);
