export const github = async () => {
    const res = await fetch('http://localhost:8787/works');
    const items = await res.json();

    return items.map((item: any) => {
        return {
            ...item,
            tags: [item.language, ...item.topics]
        }
    });
}