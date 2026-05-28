
type User = {
  id: number
  name: string
  email: string
}

async function getUsers(): Promise<User[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {
      cache: 'no-store',//This forces Next.js to render page on every request.
    }
  )

  const users = await response.json()

  return users
}

export default async function UsersPage() {
  console.log('Fetching on SERVER')

  const users = await getUsers()

  return (
    <div>
      <h1>Users (SSR)</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}




// const UserPage = () => {
//     return (
//         <div>
//             <h1>Users (SSR)</h1>
//         </div>
//     )
// }

// // agar kisi bhi page se tm ye function export karte ho
// // to nextjs automatically smjh jati hai ki tum is page
// // ko server par render krna chahte ho
// // nextjs sbse pehle is function ko call karegi
// // isme hum kuch bhi apna task kar skte hai jese
// // user ko fetch karna
// // jo bhi ye function return karega vo humare paas props me 
// // available hoga in UserPage(result)
// // export const getServerSideProps = async () => {
// //     console.log(`A task is going on in server`);
// //     // hume ek props key ko return karna hota hai tabhi 
// //     // vo humare is component me available hoga
// //     return {
// //         props: {
// //             name: "Piyush"
// //         },
// //     };
// // };
// export default UserPage;