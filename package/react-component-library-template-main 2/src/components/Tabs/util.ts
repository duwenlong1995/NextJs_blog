export const changeClassName = (location: string) => {
  if (location) {
    switch (location) {
      case "left":
        return "left";
        break;
      case "middle":
        return "middle";
        break;
      case "right":
        return "right";
        break;
    }
  }
};
