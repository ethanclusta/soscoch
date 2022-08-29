// import { error } from '@sveltejs/kit';
// import { API_KEY, ROOT_URL } from '../config/env'

const ROOT_URL = 'https://api.ethancorcoran.com/ghost/api/content/posts/';
const API_KEY = 'aad5c2662382fa777c43c80a7d';

// const url = get(ROOT_URL);
// const key = get(API_KEY);

/** @type {import('./$types').PageServerLoad} */
export function load() {
    async function getPost() {
        const res = await fetch(ROOT_URL + '?key=' + API_KEY + '&filter=tag:film&order=published_at%20asc');
        const resJson = await res.json();
        if (res.ok) {
            return resJson;
        } else {
            throw error(404, 'Not found');
        }
    }
    return getPost();
}