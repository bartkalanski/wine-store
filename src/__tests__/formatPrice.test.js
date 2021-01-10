import formatPrice from '../components/helper-functions/formatPrice'


describe("formatPrice", () => {
    it("should return total price in a specified format", () => {
      expect(formatPrice(7.99)).toBe("£7.99");
    });
    it("should round if more than two decimal places passed in", () => {
        expect(formatPrice(12.4678)).toBe("£12.47");
      });
   
  });