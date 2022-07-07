import dummy from '../db/data.json';

const DayList = () => (
  <ul className="flex justify-between gap-10 my-12">
    {dummy.days.map(day => (
      <li>Day {day.day}</li>
    ))}
  </ul>
);

export default DayList;
