import axios from "axios"

export default async function User() {
  // artificial delay so you can SEE the loader
  await new Promise(resolve => setTimeout(resolve, 3000));

  const res = await fetch(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  const data = await res.json();

  return (
    <div>
      User Page:
      <br />
      {data.name}
      <br />
      {data.email}
    </div>
  );
}
 
