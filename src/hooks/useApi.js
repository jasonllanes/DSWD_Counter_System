import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../config/api';

const useApi = (endpoint, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method,
          url: `${api.baseUrl}${endpoint}`,
          data: body,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, body]);

  return { data, error, loading };
};

export default useApi;