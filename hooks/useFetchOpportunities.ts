import { useQuery } from '@tanstack/react-query';

const useFetchOpportunities = () => {
  const {
    data: dataOpportunities,
    isLoading: isLoadingOpportunities,
    isError: isErrorOpportunities,
    refetch: refetchOpportunities,
  } = useQuery(['opportunities'], async () => {
    try {
      const response = await fetch('/json/opportunities.json');
      return response.json();
    } catch (error) {
      throw error;
    }
  });

  return {
    dataOpportunities,
    isLoadingOpportunities,
    isErrorOpportunities,
    refetchOpportunities,
  };
};

export default useFetchOpportunities;
