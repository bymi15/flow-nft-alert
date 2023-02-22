import moment from 'moment/moment';

export const getUnixExpiry = (dateOffsetString) => {
  if (!dateOffsetString) return dateOffsetString;
  const [dateValue, dateUnit] = dateOffsetString.split(' ');
  return moment().add(parseInt(dateValue), dateUnit).unix();
};
