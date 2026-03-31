import { getPropertyById, getProperties } from "./src/lib/properties";

async function test() {
  const all = await getProperties();
  console.log("Total properties loaded:", all.length);
  if (all.length > 0) {
    const firstId = String(all[0].id).replace(/\r|\n/g, "");
    console.log("First ID:", firstId);
    console.log("Looking up:", firstId);
    const p = await getPropertyById(firstId);
    console.log("Result:", p ? "FOUND" : "NOT FOUND");
  }
}

test();
