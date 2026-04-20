type EventItem = {
  id: number
  title: string
  date: string
  time: string
  description: string
}

const sampleEvents: EventItem[] = [
  {
    id: 1,
    title: 'Sunday Kirtan Gathering',
    date: 'May 4, 2026',
    time: '6:00 PM',
    description: 'Join us for kirtan, spiritual discussion, and prasadam.',
  },
  {
    id: 2,
    title: 'Bhagavad Gita Class',
    date: 'May 8, 2026',
    time: '7:00 PM',
    description: 'Weekly class with discussion and questions for all levels.',
  },
  {
    id: 3,
    title: 'Temple Community Service Day',
    date: 'May 12, 2026',
    time: '10:00 AM',
    description: 'Come help with temple service and community support activities.',
  },
]

function Events() {
  return (
    <section className="page content-section">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {sampleEvents.map((event) => (
          <article key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <p className="event-meta">
              {event.date} • {event.time}
            </p>
            <p>{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
  }

export default Events