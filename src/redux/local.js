export const saveToLocalStorage = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("bookmark", serialized);
  } catch (e) {
    console.warn("Gagal simpan ke localStorage", e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem("bookmark");
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    console.warn("Gagal ambil dari localStorage", e);
    return undefined;
  }
};
