import { FormEvent, useState } from "react";

const AddGameForm = () => {
  const [name, setName] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("Platform", platform);
    console.log("Status", status);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div data-test="name-field">
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div data-test="platform-field">
        <label htmlFor="platform">Platform</label>
        <input 
          type="text"
          id="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
      </div>
      <div data-test="status-field">
        <label htmlFor="status">Status</label>
        <input 
          type="text"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default AddGameForm;