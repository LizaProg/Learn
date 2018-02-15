import square from './square';

import getTriangleArea from './myMathModule';
const s = (n) => {return getTriangleArea(n, square(n)/2);};

export default s;