const styleRed = [
  'color: #ff0000',
  'font-weight: bold',
].join(';');

const styleGreen = [
  'color: #00ff00',
  'font-weight: bold',
].join(';');

const styleBlue = [
  'color: #00ced1',
  'font-weight: bold',
].join(';');

const styleOrange = [
  'color: #ffa500',
  'font-weight: bold',
].join(';');

const stylePink = [
  'color: #ff69b4',
  'font-weight: bold',
].join(';');
const styleYellow = [
  'color: #ffd700',
  'font-weight: bold',
].join(';');

const getStyle = (styleName) => {
  let color;
  switch (styleName) {
    case 'red':
      color = styleRed;
      break;
    case 'blue':
      color = styleBlue;
      break;
    case 'green':
      color = styleGreen;
      break;
    case 'orange':
      color = styleOrange;
      break;
    case 'pink':
      color = stylePink;
      break;
    case 'yellow':
      color = styleYellow
      break;
    default:
      color = '';
  }

  return color;
}

export const log = (name, value = '', style = '') => {
  let nName
  let nValue
  if (value === '') {
    nName = `%c[log]`
    nValue = name
  } else {
    nName = `[${name}]`
    nValue = value
  }

  style = getStyle(style);

  // eslint-disable-next-line no-console
  console.log(nName, style, nValue);
}

export default { log }
