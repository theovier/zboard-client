export interface SignUpData {
	email: string;
	password: string;
	name: string;
	picture?: File;
}

export interface Company {
	name: string;
}

export interface Author {
	id: number;
	name: string;
	profile_picture_url?: string;
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
