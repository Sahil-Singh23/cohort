import { client } from './lib/prisma.js'

async function create() {
    await client.user.create({
        data:{
            username: 'sahil',
            password: '121',
            age: 21,
    }})
    await client.user.create({
        data:{
            username: 'sneha',
            password: '121ew1',
            age: 20,
    }})
    await client.todos.create({
        data:{
            title: "hit the gym",
            desc: "at 6 pm",
            done: false,
            userId: 1
        }
    })
    await client.todos.create({
        data:{
            title: "study next js",
            desc: "at 12 pm",
            done: false,
            userId: 1
        }
    })
    await client.todos.create({
        data:{
            title: "study redux ",
            desc: "at 1 pm",
            done: false,
            userId: 2
        }
    })    
}

async function read() {
    const res = await client.todos.findMany({
    where: { id: 1 },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          age: true,
          city: true
        }
      }
    }
  });
  const res2 = await client.todos.findMany({
        where: { id: 1 },
        select: {
            id: true,
            title: true,
            desc: true,
            done: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    age: true,
                    city: true
                }
            }
        }
    });

    console.log(res);
    console.log(res2);
}

async function update() {
    const res = await client.user.update({
        where:{id:1},
        data:{
            "age":32
        }
    })
    console.log(res);
}

async function deleteTodo(){
    const res =  await client.todos.delete({
        where:{id:2},
    })
    console.log(res);
}

async function rawQueries() {
    const res = await client.$queryRaw`SELECT * FROM users`;
    console.log("Raw query response");
    console.log(res);
    const count = await client.$executeRaw`
        DELETE FROM "Todos" WHERE id = 3;
        `;
    console.log(count); 

}



async function main() {
  await create();
  console.log("---- CREATE DONE ----");

  await read();
  console.log("---- READ DONE ----");

  await update();
  console.log("---- UPDATE DONE ----");

  await deleteTodo();
  console.log("---- DELETE DONE ----");

  await rawQueries();
  console.log("---- RAW QUERY DONE ----");
}

main();





//waterfalling
//hydration error 
// file based routing
// 
// ### **What is Hydration Error?**

// A hydration error occurs when the HTML rendered on the server doesn't match the HTML rendered on the client during the hydration process.

// Hydration is the process where React attaches event listeners and makes the server-rendered HTML interactive on the client side.

// ### **Common Causes**

// 1. Using browser-only APIs (like `window` or `localStorage`) during server-side rendering
// 2. Conditional rendering that differs between server and client
// 3. Using random values or dates that generate different content on server vs client
// 4. Incorrect nesting of HTML elements (like `&lt;p&gt;` inside `&lt;p&gt;`)

// ### **Example of Hydration Error**

// ```tsx
// // ❌ This will cause a hydration error
// export default function Page() {
//   return (
//     <div>
//       <h1>Current time: {new Date().toLocaleTimeString()}</h1>
//     </div>
//   );
// }

// // The time will be different on server vs client!
// ```

// ### **Solution - Use Client Components**

// ```tsx
// // ✅ Correct approach using useEffect
// 'use client';

// import { useState, useEffect } from 'react';

// export default function Page() {
//   const [time, setTime] = useState('');

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString());
//   }, []);

//   return (
//     <div>
//       <h1>Current time: {time || 'Loading...'}</h1>
//     </div>
//   );
// }
// ```

// ### **Another Example - Using window object**

// ```tsx
// // ❌ This will cause a hydration error
// export default function Page() {
//   const width = window.innerWidth; // window is undefined on server

//   return <div>Width: {width}px</div>;
// }

// // ✅ Correct approach
// 'use client';

// import { useState, useEffect } from 'react';

// export default function Page() {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return <div>Width: {width}px</div>;
// }
// ```

// <aside>

// Remember: Any code that relies on browser APIs or generates dynamic content should be wrapped in `useEffect` or use the `'use client'` directive to avoid hydration mismatches.

// </aside>