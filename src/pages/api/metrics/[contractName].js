import { axiosServerInstance, setServerAuthHeader } from 'utils/axios';

export default async function handler(req, res) {
  let response;
  try {
    response = await axiosServerInstance.get(`/api/metrics/${req.query.contractName}`, {
      headers: {
        authorization: setServerAuthHeader(req),
      },
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data);
  }
}
