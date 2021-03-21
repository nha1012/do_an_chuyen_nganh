export const changeTypeTien = (tien: number) => {
  return tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
