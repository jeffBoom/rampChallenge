class FlagConnector {
    private baseUrl: string = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/637265';
    public async getFlag(): Promise<string | undefined> {
        try {
            const resp: Response = await fetch(this.baseUrl, { method: 'GET' });
            const body: ReadableStream<Uint8Array> | null = resp.body;
            const reader: ReadableStreamDefaultReader<Uint8Array> | undefined = body?.getReader();
            if (!reader) return;
            let content: string = '';
            while (true) {
                const read: ReadableStreamReadResult<Uint8Array> = await reader.read();
                if (read.done) break;
                content += read.value;
            }
            return content;
        } catch (error) {
            console.log('error fetching flag: ', error);
            return;
        }
    }
}

const flagConnector: FlagConnector = new FlagConnector();
export default flagConnector;