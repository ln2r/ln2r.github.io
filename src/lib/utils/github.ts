export const github = async () => {
    const res = await fetch('https://mugunghwa.scorch-62.workers.dev/works');
    const items = await res.json();

    const chunk = 2;

    const grouped: any[] = [[], []];
    const groupCount = Math.ceil((items.length === 0 ? 1 : items.length) / 2);

    for (let i = 0, l = groupCount; i < l; i++) {
        grouped[i] = items.splice(0, chunk);
    }

    return grouped;
}