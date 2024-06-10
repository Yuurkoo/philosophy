import "./index.css";

export default function Setting({ img, name }) {
  return (
    <div className="setting-component">
      <div className="blank">
        <img src={img} alt="IMAGE" />

        <strong>{name}</strong>
      </div>
    </div>
  );
}
