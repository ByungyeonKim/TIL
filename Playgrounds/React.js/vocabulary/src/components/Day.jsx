import dummy from '../db/data.json';

const Day = () => {
  const day = 3;
  const wordsList = dummy.words.filter(word => word.day === day);

  return (
    <table>
      <tbody className="divide-y divide-gray-200">
        {wordsList.map(word => (
          <tr className="text-2xl">
            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{word.eng}</td>
            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{word.kor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Day;
