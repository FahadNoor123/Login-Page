import { save } from "@/services/users";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { save } from "@/services/users";
// export default function handler(req, res) {
//     if(req.method !=="POST"){
//         return res.status(404).send();

//     }
//     const{email, password}=req.body;
//     save(email,password);
   
   
//   }








  

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(404).send();
    }
    const { email, password, name } = req.body;
    try {
        save(email, password, name);
        res.status(201).send();
    } catch (err) {
        res.status(400).json({message: err});
    }

}
  