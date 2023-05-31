import {
  Circle1Icon,
  Circle2Icon,
  DoubleLinesDotIcon,
  DoubleLinesIcon,
  TripleLinesIcon,
} from "../components/svg/icons";

const allIcons = [
  Circle1Icon,
  Circle2Icon,
  DoubleLinesDotIcon,
  DoubleLinesIcon,
  TripleLinesIcon,
];

const BackgroundSVG = ({ numOfIcons = 20 }) => {
  let result = [];

  for (let i = 0; i < numOfIcons; i++) {
    result.push(allIcons[Math.floor(Math.random() * allIcons.length)]);
  }

  return (
    <>
      {result.map((Icon, index) => {
        return (
          <div
            style={{
              position: "absolute",
              zIndex: "0",
              opacity: "0.3",
              width: "2rem",
              height: "2rem",
              top: randomizePosition(),
              right: randomizePosition(),
              bottom: randomizePosition(),
              left: randomizePosition(),
            }}
            key={index}
          >
            <Icon />
          </div>
        );
      })}
    </>
  );
};

export default BackgroundSVG;

const randomizePosition = () => {
  if (Math.random() < 0.4) {
    return "unset";
  }

  return `${Math.floor(Math.random() * 80)}%`;
};
