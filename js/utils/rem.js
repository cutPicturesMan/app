import dimensions from 'Dimensions';

let { width, scale } = dimensions.get('window');
// psd设计稿的宽度
const psd = 750;

let rem = (num) => {
  if(typeof num !== 'number'){
    return 0;
  }
  let result = (num / psd * width).toFixed(2);

  return parseFloat(result);
}

export {
  rem,
  scale,
  width as wWidth
};
