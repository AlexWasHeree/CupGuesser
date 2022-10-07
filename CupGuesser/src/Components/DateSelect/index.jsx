import React from 'react';
import { addDays, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns/esm';
import { Icon } from '../icon';

export const DateSelect = () => {
  const [currentDate, setCurrentDate] = React.useState(
    new Date('2022-11-20T00:00:00Z'),
  );

  const prevDay = () => {
    const previousDate = subDays(currentDate, 1);
    setCurrentDate(previousDate);
  };
  const nextDay = () => {
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);
  };
  return (
    <div className="flex space-x-4 p-4 items-center justify-center">
      <Icon
        name="arrowLeft"
        className="w-6 text-red-500 cursor-pointer"
        onClick={prevDay}
      />
      <span className="font-bold">
        {format(currentDate, "d 'de' MMMM", { locale: ptBR })}
      </span>
      <Icon
        name="arrowRight"
        className="w-6 text-red-500 cursor-pointer"
        onClick={nextDay}
      />
    </div>
  );
};
