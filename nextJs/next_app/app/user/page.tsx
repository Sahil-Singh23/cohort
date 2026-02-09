import axios from "axios"

export default async function User() {
  // artificial delay so you can SEE the loader
  await new Promise(resolve => setTimeout(resolve, 3000));

  const res = await fetch(
    "http://localhost:3000/api/v1/user/details"
  );
  const data = await res.json();

 return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.user}
                </div>
                
                {data?.email}
            </div>
        </div> 
    </div>
  );
}
 
