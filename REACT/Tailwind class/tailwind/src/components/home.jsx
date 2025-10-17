export function Home() {
  return (
    <div className="bg-blue-500 flex flex-col justify-center h-screen items-center">
      <h2>Webinar.gg</h2>
      <h2>Verify your age</h2>
      <h5>Please confirm your birth year. This data will not be stored</h5>
      <input
        type="text"
        placeholder="Your Birth Year"
        className="bg-amber-100 rounded-xs"
      ></input>
      <gap></gap>
      <button className="border-width-2px rounded-xs">Continue</button>
    </div>
  );
}
