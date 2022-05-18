import { Author, Company } from "../types";

const company: Company = {
	id: 0,
	name: "System",
};

const author: Author = {
	id: 0,
	name: "Post Bot",
	avatar_url:
		"https://images.unsplash.com/photo-1546776310-eef45dd6d63c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110",
	company: company,
};

export default function useSystemAuthor() {
	return author;
}
