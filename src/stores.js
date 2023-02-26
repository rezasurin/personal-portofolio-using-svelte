import { writable } from "svelte/store";

export const portoDetail = writable({});

const createPortoStore = () => {
  const { subscribe, set, update } = writable({
    portofolios: [],
  });

  return {
    subscribe,
    setPortofolios: (data) =>console.log(data),
  };
};

export const portoState = createPortoStore()