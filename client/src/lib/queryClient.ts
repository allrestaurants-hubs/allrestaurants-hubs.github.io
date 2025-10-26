import { QueryClient } from "@tanstack/react-query";

async function handleResponse(response: Response) {
  if (response.ok) {
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  }

  let errorMessage: string;
  try {
    const error = await response.json();
    errorMessage = error.message || JSON.stringify(error);
  } catch {
    errorMessage = response.statusText || `Request failed with status ${response.status}`;
  }

  throw new Error(errorMessage);
}

export async function apiRequest(
  url: string,
  options?: RequestInit
): Promise<any> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  return handleResponse(response);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetch(queryKey[0] as string);
        return handleResponse(response);
      },
      staleTime: 1000 * 60,
      retry: false,
    },
  },
});
