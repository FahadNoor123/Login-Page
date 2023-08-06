
import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcrypt';


const filePath = path.join(process.cwd(), "src", "data", "users.json");

export function getAll () {
    const data = fs.readFileSync(filePath);
    console.log("All data:", JSON.parse(data));
    return JSON.parse(data);
}



export function getById (id) {
    const data = getAll();
    return data.find(p => p.id === Number(id));
}







export async function verifyPassword (hashedPassword, password) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}







export function getByEmail (email) {
    const data = getAll();
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}

export async function save(email, password, name) {
    const data = getAll(); // Fetch data before modifying
    const found = getByEmail(email);
    console.log("Found user:", found);
    if (found) {
        alert("User already exists.");
    }
    const hashedPassword=await hash(password, 12)
    const newUser = {
        id: data.length + 1,
        email,
        newpass:password,
        password:hashedPassword,
        name,
    };
    console.log(name)
    data.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Write data back to the file
}




