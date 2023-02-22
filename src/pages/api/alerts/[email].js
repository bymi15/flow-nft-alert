import { axiosServerInstance, setServerAuthHeader } from 'utils/axios';

export default async function handler(req, res) {
  let response;
  switch (req.method) {
    case 'GET':
      try {
        response = await axiosServerInstance.post(`/api/alerts/${req.query.email}`, {
          params: req.query,
          headers: {
            authorization: setServerAuthHeader(req),
          },
        });
        res.status(200).json(response.data);
      } catch (err) {
        res.status(err.response?.status || 500).json(err.response?.data);
      }
    default:
      return res.status(501).json({ error: 'Not Implemented' });
  }
}
