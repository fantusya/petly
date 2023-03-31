export const getFormatedDate = ({ birthDate }) => {
  if (!birthDate) {
    const formatedDate = '00.00.0000';
    return formatedDate;
  }
  const birthDateToObject = new Date(birthDate);
  const formatedDate =
    birthDateToObject.toLocaleDateString('ua') || '00.00.0000';
  return formatedDate;
};
