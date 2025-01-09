import React from 'react';
import { useTranslation } from 'next-i18next';

interface ScheduleItem {
  startTime: string;
  endTime: string;
  activity: string;
  day: 1 | 2;
}

const schedule: ScheduleItem[] = [
  // Day 1
  { startTime: '8:00', endTime: '8:30', activity: 'Volunteers arrive', day: 1 },
  { startTime: '8:30', endTime: '9:00', activity: 'Attendees arrive and register', day: 1 },
  { startTime: '9:00', endTime: '9:25', activity: 'Opening ceremony', day: 1 },
  { startTime: '9:30', endTime: '12:30', activity: 'Event start and 1st working session', day: 1 },
  { startTime: '9:50', endTime: '10:35', activity: '1st workshop session', day: 1 },
  { startTime: '11:45', endTime: '12:30', activity: '2nd workshop session', day: 1 },
  { startTime: '12:30', endTime: '13:30', activity: 'Lunch', day: 1 },
  { startTime: '13:00', endTime: '18:00', activity: '2nd working session', day: 1 },
  { startTime: '14:30', endTime: '15:30', activity: '3rd workshop session', day: 1 },
  { startTime: '16:00', endTime: '17:00', activity: '4th workshop session', day: 1 },
  { startTime: '17:30', endTime: '17:50', activity: 'Lightning talks', day: 1 },
  { startTime: '18:00', endTime: '19:00', activity: 'Dinner', day: 1 },
  { startTime: '18:00', endTime: '18:30', activity: 'Real-time Auction', day: 1 },
  { startTime: '19:00', endTime: '20:00', activity: 'Final working session', day: 1 },

  // Day 2
  { startTime: '8:15', endTime: '8:30', activity: 'Doors Open - fast register', day: 2 },
  { startTime: '8:30', endTime: '12:00', activity: '3rd working session', day: 2 },
  { startTime: '12:00', endTime: '13:00', activity: 'Lunch', day: 2 },
  { startTime: '13:00', endTime: '16:00', activity: '4th working Session', day: 2 },
  { startTime: '16:00', endTime: '17:00', activity: 'Project submissions and voting time', day: 2 },
  { startTime: '17:00', endTime: '17:30', activity: 'Awards ceremony and closing remarks', day: 2 },
  { startTime: '17:30', endTime: '18:00', activity: 'Clean up', day: 2 },
];

const RundownSchedule = () => {
  const { t } = useTranslation('common');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('Rundown')}</h1>

      {[1, 2].map((day) => (
        <div key={day} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">{t('DAY')} {day}</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold">{t('Start')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">{t('End')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">{t('Activity')}</th>
                </tr>
              </thead>
              <tbody>
                {schedule
                  .filter((item) => item.day === day)
                  .map((item, index) => (
                    <tr
                      key={index}
                      className={`
                        border-b border-gray-200
                        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        hover:bg-blue-50 transition-colors duration-150
                      `}
                    >
                      <td className="px-4 py-3 text-sm">{item.startTime}</td>
                      <td className="px-4 py-3 text-sm">{item.endTime}</td>
                      <td className="px-4 py-3 text-sm">{t(item.activity)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RundownSchedule;
