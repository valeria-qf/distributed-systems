import api from "./api";

export interface Character {
    id: number;
    name: string;
    image: string;
}

interface ApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export const fetchCharacters = async (page: number): Promise<ApiResponse> => {
    try {
        const response = await api.get<ApiResponse>(`character/?page=${page}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
      }
}