// PhoneMock — the shared phone visual used by the Reminder and Notification
// acts. `noteT` drives the notification slide-in (0 = hidden, 1 = seated).
export default function PhoneMock({ noteT = 1 }) {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-app">
          <span className="logo" aria-hidden="true">R</span> ReminderDocs
        </div>
        <div
          className="phone-notif"
          style={{
            opacity: noteT,
            transform: `translateX(${((1 - noteT) * 130).toFixed(1)}%)`,
          }}
        >
          <span className="notif-bell" aria-hidden="true">🔔</span>
          <div>
            <b>Insurance renewal</b>
            <small>Your insurance expires in 18 days.</small>
            <span className="notif-cta">Renew now →</span>
          </div>
        </div>
        <div className="phone-dots" aria-hidden="true"><i /><i /><i /></div>
      </div>
    </div>
  );
}
