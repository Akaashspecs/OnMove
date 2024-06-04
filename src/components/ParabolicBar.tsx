const getParabolicPath = ({
  x,
  y,
  width,
  height,
  controlPointOffset,
  item,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  controlPointOffset: number;
  item: number;
}) =>
  `M${x - controlPointOffset},${y + height}
   Q${x + width / 2},${
    (height === 18.75 && y - height + item * 4) ||
    (height === 37.5 && y - height + item * 8) ||
    (height === 93.75 && y - height + item * 21) ||
    (height === 143.75 && y - height + item * 33) ||
    y
  } ${x + width + controlPointOffset},${y + height} 
   Z`;

const getNormalParabolicPath = ({
  x,
  y,
  width,
  height,
  controlPointOffset,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  controlPointOffset: number;
}) =>
  `M${x - controlPointOffset},${y + height}
   Q${x + width / 2},${y - height} ${x + width + controlPointOffset},${
    y + height
  } 
   Z`;

const ParabolicBar = (props: any) => {
  const { x, y, width, height, controlPointOffset } = props;

  const fillColor = `${
    (height >= 50 && height <= 100 && "#F8C255") ||
    (height < 50 && "#FD5356") ||
    (height > 100 && "#4bea7f")
  }`;

  const Arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {Arr.map((item, index) => {
        if (item > 1) {
          return (
            <path
              key={index}
              d={getParabolicPath({
                x,
                y,
                width,
                height,
                controlPointOffset,
                item,
              })}
              fill={fillColor}
              stroke={`${
                (height >= 50 && height <= 100 && "#c69b44") ||
                (height < 50 && "#ca4245") ||
                (height > 100 && "#267540")
              }`}
              fillOpacity={0}
            />
          );
        } else
          return (
            <path
              key={index}
              d={getNormalParabolicPath({
                x,
                y,
                width,
                height,
                controlPointOffset,
              })}
              fill={fillColor}
              stroke={`${
                (height >= 50 && height <= 100 && "#c69b44") ||
                (height < 50 && "#ca4245") ||
                (height > 100 && "#267540")
              }`}
              fillOpacity={0.5}
            />
          );
      })}
    </>
  );
};

export default ParabolicBar;
