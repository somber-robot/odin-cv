import { useState } from "react";

function Data({
  title,
  type,
  placeholder,
  active,
  formatter = (value) => value,
}) {
  const [value, setValue] = useState("");

  return (
    <div className="data">
      {active ? (
        <>
          <label htmlFor="title">{title}</label>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              setValue(formatter(e.target.value));
            }}
            className="data-input"
          />
        </>
      ) : (
        <p className="data">
          {title} <p>{value || <i style={{ opacity: 0.4 }}>NIL</i>}</p>
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(true);

  return (
    <div className="container">
      <h1 className="title">
        Resu<b>make</b>
      </h1>
      <div className="sections">
        <fieldset className="section">
          <legend className="section-title">General Information</legend>
          <Data
            title="Name:"
            type="text"
            placeholder="Enter full name"
            active={active}
          />
          <Data
            title="Email:"
            type="email"
            placeholder="Enter email"
            active={active}
          />

          <Data
            title="Phone No:"
            type="email"
            placeholder="Enter phone number"
            active={active}
            formatter={(value) => {
              if (value.length > 13) return value.substring(0, 13);
              let newVal = "";
              for (let i = 0; i < value.length; i++) {
                if (i === 3 || i === 8) newVal += " ";
                if (isNaN(+value[i])) continue;
                newVal += value[i].trim();
              }
              return newVal;
            }}
          />
        </fieldset>

        <fieldset className="section">
          <legend className="section-title">Education</legend>
          <Data
            title="Institution Name:"
            type="text"
            placeholder="Enter school name"
            active={active}
          />

          <Data
            title="Field of Study:"
            type="text"
            placeholder="Enter subject name"
            active={active}
          />

          <Data title="Completion Date:" type="date" active={active} />
        </fieldset>

        <fieldset className="section">
          <legend className="section-title">Work Experience</legend>
          <Data
            title="Institution Name:"
            type="text"
            placeholder="Enter company name"
            active={active}
          />

          <Data
            title="Position Title:"
            type="text"
            placeholder="Enter job title"
            active={active}
          />

          <Data title="Start Date:" type="date" active={active} />

          <Data title="End Date" type="date" active={active} />
        </fieldset>
      </div>
      <div className="buttons">
        <button
          className="toggle"
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? "Submit" : "Edit"}
        </button>
      </div>
    </div>
  );
}
