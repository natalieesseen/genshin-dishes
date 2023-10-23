export async function fetchDishes() {
    const res = await fetch('https://api.genshin.dev/consumables/food');
    const data = await res.json();
    return data;
}