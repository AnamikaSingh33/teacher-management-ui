
'use client';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['9am', '10am', '11am', '1pm', '2pm', '3pm'];

// Mock availability: true = available, false = unavailable
const availability: Record<string, boolean[]> = {
  Monday:    [true, true, false, true, false, true],
  Tuesday:   [true, false, false, true, true, false],
  Wednesday: [false, false, true, true, true, true],
  Thursday:  [true, true, true, false, false, false],
  Friday:    [false, true, true, true, false, true],
};

export default function ScheduleGrid() {
  return (
    <section className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Weekly Schedule</h3>
      <div className="overflow-auto">
        <table className="min-w-full text-sm text-center">
          <thead>
            <tr>
              <th className="p-2 bg-gray-100">Day / Time</th>
              {times.map((time) => (
                <th key={time} className="p-2 bg-gray-100">{time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <td className="p-2 font-medium bg-gray-50">{day}</td>
                {availability[day].map((isAvailable, idx) => (
                  <td
                    key={idx}
                    className={`p-2 ${
                      isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    } rounded`}
                  >
                    {isAvailable ? '✔' : '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
