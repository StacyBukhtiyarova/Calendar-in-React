const baseUrl = 'https://649333cf428c3d2035d17deb.mockapi.io/api/v1/events';
const events = [
  // {
  //   id: 1,
  //   title: 'Go to the gym',
  //   description: 'some text here',
  //   dateFrom: new Date(2020, 10, 16, 10, 15),
  //   dateTo: new Date(2023, 10, 16, 15, 0),
  // },
  {
    id: 0,
    title: 'Make dinner',
    description: "hello, it's time to make dinner",
    dateFrom: new Date(2023, 10, 21, 18, 15),
    dateTo: new Date(2023, 10, 21, 19, 0),
  },
  // {
  //   id: 2,
  //   title: 'Go to the school',
  //   description: 'hello, 2 am',
  //   dateFrom: new Date(2020, 8, 16, 10, 15),
  //   dateTo: new Date(2020, 8, 16, 11, 0),
  // },
  {
    id: 1,
    title: '',
    description: '',
    dateFrom: new Date(2020, 8, 17, 10, 30),
    dateTo: new Date(2020, 8, 17, 11, 30),
  },
  // {
  //   id: 4,
  //   title: 'Meet friend',
  //   description: 'at the cafe',
  //   dateFrom: new Date(2020, 8, 25, 10, 30),
  //   dateTo: new Date(2020, 8, 25, 11, 0),
  // },
  {
    id: 2,
    title: 'Workout',
    description: 'HIIT workout',
    dateFrom: new Date(2023, 10, 21, 15, 30),
    dateTo: new Date(2023, 10, 21, 16, 0),
  },
];
export const fetchEvents = () =>
  fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network error');
      }
      return res.json();
    })
    .catch(() => {
      alert("Network Error! Can't display events.");
      return [];
    });

export const onCreateTask = (taskInfo) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskInfo),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network error');
      }
    })
    .catch(() => {
      alert("Network Error! Can't create event.");
      return;
    });
export default events;
