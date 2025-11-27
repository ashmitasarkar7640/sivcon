import React from 'react';
// import { Calendar, Clock } from 'lucide-react';

// const scheduleItems = [
//   {
//     day: "Thursday, Jan 25",
//     events: [
//       { time: "09:00 - 10:30", title: "Registration & Welcome Coffee" },
//       { time: "10:30 - 12:00", title: "Opening Ceremony" },
//       { time: "12:00 - 13:30", title: "Lunch Break" },
//       { time: "13:30 - 17:00", title: "Committee Session I" },
//       { time: "19:00 - 21:00", title: "Welcome Reception" }
//     ]
//   },
//   {
//     day: "Friday, Jan 26",
//     events: [
//       { time: "09:00 - 12:30", title: "Committee Session II" },
//       { time: "12:30 - 14:00", title: "Lunch Break" },
//       { time: "14:00 - 17:30", title: "Committee Session III" },
//       { time: "18:00 - 20:00", title: "Cultural Night" }
//     ]
//   },
//   {
//     day: "Saturday, Jan 27",
//     events: [
//       { time: "09:00 - 12:30", title: "Committee Session IV" },
//       { time: "12:30 - 14:00", title: "Lunch Break" },
//       { time: "14:00 - 17:30", title: "Committee Session V" },
//       { time: "19:00 - 23:00", title: "Delegate Ball" }
//     ]
//   },
//   {
//     day: "Sunday, Jan 28",
//     events: [
//       { time: "09:00 - 12:30", title: "Committee Session VI" },
//       { time: "12:30 - 14:00", title: "Lunch Break" },
//       { time: "14:00 - 16:00", title: "Closing Ceremony & Awards" }
//     ]
//   }
// ];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="newspaper-border fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase border-b-2 border-black pb-2">
        Conference Schedule
      </h2>

      {/* <div className="flex items-center justify-center mb-4">
        <Calendar className="mr-2" size={20} />
        <span className="font-bold">January 25-28, 2025</span>
      </div>

      <div className="space-y-6">
        {scheduleItems.map((day, index) => (
          <div key={index} className={index > 0 ? "pt-4 border-t border-gray-400" : ""}>
            <h3 className="text-xl font-bold mb-2">{day.day}</h3>
            <div className="space-y-2">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="flex">
                  <div className="w-1/3 font-bold flex items-center">
                    <Clock size={14} className="mr-1" />
                    {event.time}
                  </div>
                  <div className="w-2/3">{event.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-400 text-sm italic text-center">
        Schedule subject to minor changes. All delegates will receive a detailed program upon registration.
      </div> */}

      <div className="text-center mt-8 text-lg font-semibold">
        Coming soon
      </div>
    </section>
  );
};

export default Schedule;
