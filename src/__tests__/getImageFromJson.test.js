import getImageFromJson from "../components/helper-functions/getImageFromJson";

describe("date", () => {
  it("should return file name of imageOne", () => {
    expect(getImageFromJson("imageOne")).toBe("porta6.jpg");
  });
  it("should return file name of imageTwo", () => {
    expect(getImageFromJson("imageTwo")).toBe("CNDP.png");
  });
  it("should return file name of imageThree", () => {
    expect(getImageFromJson("imageThree")).toBe("riesling.jpg");
  });it("should return file name of imageFour", () => {
    expect(getImageFromJson("imageFour")).toBe("rioja.jpg");
  });
});
