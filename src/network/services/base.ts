import client from "../client";

export default abstract class BaseService {
	endpoint: string;

	protected constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll(): Promise<void> {
		return client.get(`${this.endpoint}`).then((response: any) => {
			return response.data.data;
		});
	}

	get(id: number): Promise<void> {
		return client.get(`${this.endpoint}/${id}`).then((response: any) => {
			return response.data.data;
		});
	}

	store(model: any) {
		return client.post(`${this.endpoint}`, model);
	}

	//
	// update(model: any) {}
	//
	// destroy(model: any) {}
}
