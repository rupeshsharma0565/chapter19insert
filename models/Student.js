import mongoose from "mongoose";

//Defining Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 55 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5500.5,
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

//compiling Schema  //creating Model..
const studentModel = mongoose.model("student", studentSchema);


//Make function for createDoc ...
// const createDoc = async () => {
//   try {
//     //Creating New Document
//     const studentDoc = new studentModel({
//       name: "Rahul",
//       age: 32,
//       fees: 8500.4,
//       hobbies: ["cricket", "movie", "walking"],
//       isActive: true,
//       comments: [{ value: "This is a good Habit for us ." }],
//     });

//     //saving Document
//     const result = await studentDoc.save();
//     console.log(result);

//   } catch (error) {
//     console.log(error);
//   }
// }



//Make funciton with arguments ..

// const createDoc = async (nm,ag,fe,hob,isa,com) => {
//     try {
//       //Creating New Document
//       const studentDoc = new studentModel({
//         name: nm,
//         age: ag,
//         fees: fe,
//         hobbies: hob,
//         isActive: isa,
//         comments: com
//       });
  
//       //saving Document
//       const result = await studentDoc.save();
//       console.log(result);
  
//     } catch (error) {
//       console.log(error);
//     }
//   }


//Make function for createDoc ...
const createMultiDoc = async () => {
  try {
    //Creating New Document
    const rahulDoc = new studentModel({
      name: "Rahul",
      age: 32,
      fees: 8500.4,
      hobbies: ["cricket", "movie", "walking"],
      isActive: true,
      comments: [{ value: "This is a good Habit for us ." }],
    });

    const rohitDoc = new studentModel({
        name: "Rohit",
        age: 25,
        fees: 7500.4,
        hobbies: ["cricket", "movie", "walking"],
        isActive: true,
        comments: [{ value: "This is a good Habit for us ." }],
      });

      const sumanDoc = new studentModel({
        name: "suman",
        age: 19,
        fees: 8500.4,
        hobbies: ["cricket", "movie", "walking"],
        isActive: true,
        comments: [{ value: "This is a good Habit for us ." }],
      });

    //saving Document
    // const result = await studentDoc.save(); //only for single data 
    const result = await studentModel.insertMany([rahulDoc,rohitDoc,sumanDoc]) //for multiple data store .
    console.log(result);

  } catch (error) {
    console.log(error);
  }
}




// export default createDoc
export { createMultiDoc}
