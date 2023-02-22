import { useMutation } from '@tanstack/react-query';
import { axiosPublicInstance } from 'utils/axios';

export const useCreateAlertMutation = () =>
  useMutation((data) => {
    return axiosPublicInstance.post('/api/alerts', data);
  });
