export class Mugunghwa {
    constructor(private readonly fetchFn: typeof fetch = fetch) {}

    async works() {
        try {
            const res = await this.fetchFn('http://localhost:8787/works');
            const items = await res.json();

            const chunk = 2;

            const grouped: any[] = [[], []];
            const groupCount = Math.ceil((items.length === 0 ? 1 : items.length) / 2);

            for (let i = 0, l = groupCount; i < l; i++) {
                grouped[i] = items.splice(0, chunk);
            }

            return grouped;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async writings() {
        try {
            const res = await this.fetchFn('http://localhost:8787/writings');
            return await res.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    async writing(slug: string) {
        try {
            const res = await this.fetchFn('http://localhost:8787/writing/' + slug);
            return await res.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}