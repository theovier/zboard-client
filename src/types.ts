export interface SignUpData {
	email: string;
	password: string;
	name: string;
	picture?: File;
}

export interface Company {
	id: number;
	name: string;
}

export interface Author {
	id: number;
	name: string;
	avatar_url?: string;
	company?: Company;
}

export interface Post {
	id: number;
	title: string;
	author: Author;
	content?: string;
}

export interface CreatePostRequest {
	title: string;
	content?: string;
}
