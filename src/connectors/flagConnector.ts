class FlagConnector {
    private baseUrl: string = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/637265';
    public async getFlag(): Promise<string | undefined> {
        try {
            const resp: Response = await fetch(this.baseUrl, { method: 'GET' });
            return await resp.text();
        } catch (error) {
            console.log('error fetching flag: ', error);
            return;
        }
    }
}

const flagConnector: FlagConnector = new FlagConnector();
export default flagConnector;