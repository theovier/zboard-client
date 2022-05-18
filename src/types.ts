export interface SignUpData {
	email: string;
	password: string;
	name: string;
	picture?: File;
}

export interface Author {
	id: number;
	name: string;
	avatar_url?: string;
}

export interface Post {
	id: number;
	title: string;
	author: Author;
	content: string;
	created_at: string;
	updated_at: string;
}
