// 'use server'
// const path = require('path');
// const process = require("process");
// import fs from 'fs/promises';
// import { revalidatePath } from "next/cache";

// async function submitContactForm(formData: FormData){
//     // console.log("formData: ", formData);
    
//     // lets define the file path
//     // cwd - current working directory
//     const name =  formData.get("fullName");
//     const userEmail = formData.get("email");
//     const userMessage = formData.get("message");
//     const obj = {
//         fullName:name,
//         email: userEmail,
//         message: userMessage
//     }
//     console.log("obj: ", obj);
//     const filePath = path.join(process.cwd(), "app", "data", "users.json");
    
//     // read the file
//     const fileData = await fs.readFile(filePath, 'utf-8');

//     console.log("fileData: ", fileData);

//     // lets convert the file data to JS object
//     const data = fileData ? JSON.parse(fileData) : []; 
//     data.push(obj);
//     console.log("Parsed Data: ", data);

//     await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//     revalidatePath('/contact');
//     console.log("Data saved successfully");

// }
// export default submitContactForm;

// export async function getDetails(){
//     const filePath = path.join(process.cwd(), "app", "data", "users.json");
//     const fileData = await fs.readFile(filePath, "utf-8");
    
//     return fileData ? JSON.parse(fileData) : [];
// }

// //  Blog: fetching static data with dynamic routes
// // Porfolio site : Multipage porfolio site (having diff sections )
// // ToDo list
// // server action: Users post feedback with instant UI updates

// // 1. Create a feedback form
// // 2. details should be immediately displayed on the UI
// // 3. Save the feedback data to some file using server action
