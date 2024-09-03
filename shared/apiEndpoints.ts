export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const GET_STEPS = API_URL + "/api/steps";
export const GET_PROCESS = (slug) => API_URL + `/api/processes/${slug}`;
export const GET_WEEK_CASES = API_URL + "/api/week-cases"
