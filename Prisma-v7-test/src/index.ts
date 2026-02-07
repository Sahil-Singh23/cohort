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
