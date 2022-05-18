import client from "../client";

export default abstract class BaseService {
	endpoint: string;

	protected constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll(): Promise<any> {
		return client.get(`${this.endpoint}`);
	}

	get(id: number): Promise<any> {
		return client.get(`${this.endpoint}/${id}`);
	}

	store(model: any): Promise<any> {
		return client.post(`${this.endpoint}`, model);
	}
}
