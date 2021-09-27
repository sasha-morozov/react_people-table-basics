const API_URL = "https://mate-academy.github.io";

const request = async (url: string) => {
  const response = await fetch(`${API_URL}${url}`)

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
}

export const getPeople = () => request('/react_people-table/api/people.json');
