type DarshanModalProps = {
  isOpen: boolean
  onClose: () => void
}

function DarshanModal({ isOpen, onClose }: DarshanModalProps) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="darshan-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close darshan modal"
        >
          ×
        </button>

        <p className="modal-kicker">Temple Opening Hours</p>
        <h2>Daily Darshan Schedule</h2>
        <p className="opening-hours">Daily from 4:30 AM till 9:30 PM</p>

        <div className="darshan-list">
          <div className="darshan-item">
            <h3>Mangala Arati</h3>
            <p>4:30 AM – 5:00 AM</p>
          </div>

          <div className="darshan-item">
            <h3>Darshan Arati</h3>
            <p>7:00 AM onwards</p>
          </div>

          <div className="darshan-item">
            <h3>Dhoopa Arati</h3>
            <p>8:00 AM onwards</p>
          </div>

          <div className="darshan-item">
            <h3>Raj Bhoga Arati</h3>
            <p>12:30 PM onwards</p>
          </div>

          <div className="darshan-item">
            <h3>Dhoopa Arati</h3>
            <p>4:15 PM onwards</p>
          </div>

          <div className="darshan-item">
            <h3>Sandhya Arati</h3>
            <p>7:00 PM onwards</p>
          </div>

          <div className="darshan-item">
            <h3>Sayana Arati</h3>
            <p>9:00 PM onwards</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DarshanModal