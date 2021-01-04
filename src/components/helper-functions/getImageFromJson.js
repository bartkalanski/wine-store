import imageOne from "../../imgs/porta6.jpg";
import imageTwo from "../../imgs/CNDP.png";
import imageThree from "../../imgs/riesling.jpg";
import imageFour from "../../imgs/rioja.jpg";

const getImageFromJson = (image) => {
  if (image === "imageOne") {
    return imageOne;
  } else if (image === "imageTwo") {
    return imageTwo;
  } else if (image === "imageThree") {
    return imageThree;
  } else if (image === "imageFour") {
    return imageFour;
  }
};

export default getImageFromJson;
