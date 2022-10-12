it("should calculate the monthly rate correctly", function () {
  expect(
    calculateMonthlyPayment({ amount: 100000, years: 30, rate: 8 })
  ).toEqual("733.76");
  expect(
    calculateMonthlyPayment({ amount: 85000, years: 15, rate: 2.7 })
  ).toEqual("574.81");
  expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 3 })).toEqual(
    "179.69"
  );
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 100000, years: 30, rate: 8 })
  ).toBeCloseTo("733.76", 2);
  expect(
    calculateMonthlyPayment({ amount: 85000, years: 15, rate: 2.7 })
  ).toBeCloseTo("574.81", 2);
  expect(
    calculateMonthlyPayment({ amount: 26800, years: 3, rate: 1.9 })
  ).toBeCloseTo("766.45", 2);
});

it("should return nan when rate is empty", function () {
  expect(
    calculateMonthlyPayment({ amount: 100000, years: 30, rate: "" })
  ).toBeNaN();
});

it("should check for value", function () {
  expect(
    getCurrentUIValues({ amount: 100000, years: 30, rate: 8 })
  ).toBeGreaterThan("0");
});

describe("check values", function () {
  it("should make sure value of principle is correct", function () {
    const values = { amount: 100000, years: 30, rate: 8 };
    const p = values.amount;
    expect(calculateMonthlyPayment(p)).toEqual(100000);
  });

  it("should make sure value of year is correct", function () {
    const values = { amount: 100000, years: 30, rate: 8 };
    const timeFrame = values.years * 12;
    expect(calculateMonthlyPayment(timeFrame)).toEqual(360);
  });

  it("make sure value of rate is correct", function () {
    const values = { amount: 100000, years: 30, rate: 8 };
    const intrestRate = values.rate / 100 / 12;
    expect(calculateMonthlyPayment(intrestRate)).toEqual(0.006);
  });

  it("all values", function () {
    const values = { amount: 1000, years: 20, rate: 3 };
    expect(getCurrentUIValues(values)).toContain(number);
  });
});

it("monthly update", function () {
  expect(updateMonthly()).toContain(string);
});
