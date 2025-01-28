import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';

// Custom hook for API operations
export function useApi<T>(endpoint: string) {
  const queryClient = useQueryClient();
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data, isLoading, error } = useQuery<T>({
    queryKey: [endpoint],
    queryFn: async () => {
      try {
        const response = await axios.get(`${apiUrl}/${endpoint}`);
        return response.data;
      } catch (error) {
        console.error('API Error:', error);
        toast.error('Failed to fetch data. Please try again.');
        throw error;
      }
    },
  });

  const mutation = useMutation({
    mutationFn: async (newData: Partial<T>) => {
      const response = await axios.post(`${apiUrl}/${endpoint}`, newData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
      toast.success('Operation completed successfully!');
    },
    onError: (error) => {
      console.error('Mutation Error:', error);
      toast.error('Operation failed. Please try again.');
    },
  });

  return {
    data,
    isLoading,
    error,
    mutate: mutation.mutate,
  };
}