'use server'
import fs from 'fs/promises';
import path from 'path';

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

    // now read the file and get the file data
    const fileData = await fs.readFile(filePath, 'utf-8');

    // convert this fileData to JS object 
    const jsdata = fileData ? JSON.parse(fileData) : [];

    // push the feedback form to the jsdata
    jsdata.push(newFeedback);

    // need to write the updated file data to the file
    await fs.writeFile(filePath, JSON.stringify(jsdata, null, 2));

    console.log("Feedback data saved successfully");

    // we need to read the file
    // get the existing file data
    // append the new form data
    // save the file or write the data to the file
    // in JSON format 
    // prints message, data saved
}

export default submitFeedbackForm;