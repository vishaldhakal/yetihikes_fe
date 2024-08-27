"use client";
import React, { useState } from "react";
import { DollarSign, CalendarDays, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CommissionCalculator = () => {
  const [advanceAmount, setAdvanceAmount] = useState(1000);
  const [numberOfDays, setNumberOfDays] = useState(30);
  const [calculationResults, setCalculationResults] = useState(null);

  const calculateResults = () => {
    const advanceAmountNum = parseFloat(advanceAmount);
    const daysNum = parseInt(numberOfDays);

    const minRate = 0.0006; // 0.06% per day
    const maxRate = 0.0008; // 0.08% per day

    const minFee = advanceAmountNum * minRate * daysNum;
    const maxFee = advanceAmountNum * maxRate * daysNum;

    const today = new Date();
    const advanceDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const paybackDate = new Date(
      today.setDate(today.getDate() + daysNum)
    ).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setCalculationResults({
      advanceAmount: advanceAmountNum,
      advanceDate,
      paybackDate,
      numberOfDays: daysNum,
      minFee: minFee.toFixed(2),
      maxFee: maxFee.toFixed(2),
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Commission Advance Calculator
          </h2>
          <p className="text-gray-600 text-center md:text-left mb-6">
            Use our calculator to estimate your commission advance and
            associated costs. Simply enter your desired advance amount and the
            number of days until your expected closing date to see how much you
            can receive.
          </p>
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-800 text-center md:text-start">
              Why Choose Us?
            </h3>
            <div className="flex justify-center">
              <ul className="list-disc list-inside text-blue-700 leading-7">
                <li>Instant payout</li>
                <li>Best rates guaranteed</li>
                <li>Value-added business support</li>
                <li>Tech-driven operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-md">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Advance Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="number"
                  value={advanceAmount}
                  onChange={(e) => setAdvanceAmount(e.target.value)}
                  className="pl-8"
                  placeholder="Enter advance amount"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Number of Days Until Closing [From Today]
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="number"
                  value={numberOfDays}
                  onChange={(e) => setNumberOfDays(e.target.value)}
                  className="pl-8"
                  placeholder="Enter number of days"
                />
              </div>
            </div>
            <Button onClick={calculateResults} className="w-full">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate
            </Button>
          </div>

          {calculationResults && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Advance Amount:</span> $
                    {calculationResults.advanceAmount.toFixed(2)}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Advance Date:</span>{" "}
                    {calculationResults.advanceDate}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Payback Date:</span>{" "}
                    {calculationResults.paybackDate}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Number of Days:</span>{" "}
                    {calculationResults.numberOfDays}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Advance Fee Range:</span> $
                    {calculationResults.minFee} - ${calculationResults.maxFee}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommissionCalculator;
