export class Mugunghwa {
    constructor(private readonly fetchFn: typeof fetch = fetch) {}

    async works() {
        const res = await this.fetchFn('http://localhost:8787/works');
        const items = await res.json();

        const chunk = 2;

        const grouped: any[] = [[], []];
        const groupCount = Math.ceil((items.length === 0 ? 1 : items.length) / 2);

        for (let i = 0, l = groupCount; i < l; i++) {
            grouped[i] = items.splice(0, chunk);
        }

        return grouped;
    }

    async writings() {
        const res = await this.fetchFn('http://localhost:8787/writings');
        return await res.json();
    }
}