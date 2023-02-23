import moment from 'moment/moment';

export const getUnixExpiry = (dateOffsetString) => {
  if (!dateOffsetString) return dateOffsetString;
  const [dateValue, dateUnit] = dateOffsetString.split(' ');
  return moment().add(parseInt(dateValue), dateUnit).unix();
};

export const matchCollectionByQuery = (collection, query) =>
  collection?.name.toLowerCase().includes(query.toLowerCase()) ||
  collection?.contractName.toLowerCase().includes(query.toLowerCase());
