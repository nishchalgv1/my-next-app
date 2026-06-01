'use server'
import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
async function submitFeedbackForm(formData:FormData){
    console.log("feedback form: ", formData);

    // extract username, email, feedback
    const username = formData.get("username");
    const email = formData.get("email");
    const feedback = formData.get("feedback");

    const newFeedback = {
        username,
        email,
        feedback
    }
    // find the path of the file
    const filePath = path.join(process.cwd(), "app", "data", "feedbacks.json");
    console.log("filePath", filePath);

    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    })
   
    // now read the file and get the file data
    const fileData = await fs.readFile(filePath, 'utf-8');

    // convert this fileData to JS object 
    const jsdata = fileData ? JSON.parse(fileData) : [];

    // push the feedback form to the jsdata
    jsdata.push(newFeedback);

    // need to write the updated file data to the file
    await fs.writeFile(filePath, JSON.stringify(jsdata, null, 2));
    revalidatePath('/feedback');

    console.log("Feedback data saved successfully");

    // we need to read the file
    // get the existing file data
    // append the new form data
    // save the file or write the data to the file
    // in JSON format 
    // prints message, data saved
}

export async function getAllFeedbacks(){
    // we need to construct the file path
    const filePath = path.join(process.cwd(), "app", "data", "feedbacks.json");
    
    const rawData = await fs.readFile(filePath, 'utf-8');

    // convert rawdata
    const fileData = rawData ? JSON.parse(rawData) : [];

    return fileData;

    // read the file data
    // convert it to JS array of objects
    // return the data
}

export default submitFeedbackForm;

// const [optimisticState, addOptimistic] =
// useOptimistic(state, (actualState, newValue) => {
//     return [...actualState, nw]
// })
