const makePoint = (x, y) => {
    return {
        xCoordinate: x,
        yCoordinate: y
    };
};

const getX = (point) => {
    return point.xCoordinate;
};

const getY = (point) => {
    return point.yCoordinate;
};

export {makePoint, getX, getY}