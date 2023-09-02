import { writable } from "svelte/store";

export const countryDataStore = writable([]);

async function fetchCountryData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Set the data in the store
    countryDataStore.set(data);
  } catch (error) {
    console.error("Error fetching country data:", error.message);
  }
}

fetchCountryData();
