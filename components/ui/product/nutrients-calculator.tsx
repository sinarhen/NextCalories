'use client'
import Button from "@/components/ui/button";
import React, {useState} from "react";

interface NutrientsCalculatorProps{
  fats: number;
  protein: number;
  carbs: number;
  calories: number;
  totalWeight: number;

}

const NutrientsCalculator: React.FC<NutrientsCalculatorProps> = ({
  fats,
  protein,
  carbs,
  calories,
  totalWeight,
}) => {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <div className="h-full bg-gray-200 rounded gap-x-2">
        <h1 className='px-5 pt-3'>
          Nutrients calculator
        </h1>
        <div className="flex px-5 overflow-hidden items-center gap-x-2 mt-1">
          <input
            value={inputValue}
            type="number"
            onChange={(e: any) => setInputValue(Math.abs(Number(e.target.value)))}
            className="w-full rounded px-2 py-1 outline-0 placeholder:absolute placeholder:right-2"
            placeholder="g"
          />
        </div>
        <div className="px-5 grid grid-cols-5 w-full gap-x-2 md:gap-x-3 mt-3">
          {[-200, -100, 0, 100, 200].map((operation) => {
            const calc = Number(inputValue) + operation;
            return (
              <div key={operation} className='w-full flex justify-center'>
                <Button
                  className="hover:translate-y-0"
                  onClick={() =>
                    setInputValue(operation !== 0 ? (calc > 0 ? calc : 0) : 0)
                  }
                >
                  {operation > 0 ? `+${operation}` : operation}
                </Button>
              </div>

          )
          })}
        </div>
        <hr className='h-px mt-2 mb-3 bg-gray-400 px-1 border-0 '/>
        <div className='px-5 grid grid-cols-4 gap-x-2 pb-3'>

          <div className='flex truncate flex-col items-center justify-center'>
            <h1 className='font-bold'>Fats</h1>
            <p>{(fats / totalWeight * inputValue).toFixed(2)}g</p>
          </div>

          <div className='flex flex-col truncate items-center justify-center'>
            <h1 className='font-bold'>Carbs</h1>
            <p>{(carbs / totalWeight * inputValue).toFixed(2)}g</p>
          </div>

          <div className='flex flex-col truncate items-center justify-center'>
            <h1 className='font-bold'>Protein</h1>
            <p>{(protein / totalWeight * inputValue).toFixed(2)}g</p>
          </div>

          <div className='flex flex-col truncate items-center justify-center'>
            <h1 className='font-bold'>Calories</h1>
            <p className='truncate'>{(calories / totalWeight * inputValue).toFixed()}kcal</p>
          </div>

        </div>
      </div>

    </div>
  )
}


export default NutrientsCalculator;