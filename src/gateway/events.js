export const baseUrl =
  'https://649333cf428c3d2035d17deb.mockapi.io/api/v1/events';
const events = []
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
export const onDeleteTask = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });

export default events;
