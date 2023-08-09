export default function Steps() {
  return (
    <ul className="steps steps-vertical lg:steps-horizontal">
      <li data-content="●" className="step step-primary">
        Register
      </li>
      <li data-content="●" className="step step-primary">
        Choose plan
      </li>
      <li data-content="●" className="step">
        Purchase
      </li>
      <li data-content="●" className="step">
        Receive Product
      </li>
    </ul>
  );
}
