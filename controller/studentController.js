import studentModel from "../models/studentModel.js";

class studentController {
  static createDoc = async (req, res) => {
    // console.log(req.body)
    try {
      const { name, age, fees } = req.body;

      const doc = new studentModel({
        name: name,
        age: age,
        fees: fees,
      });
      //saving doc
      const result = await doc.save();

      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  };

  //------------------------EDIT------------------------------

  static editDoc = async(req, res) => {
  try{
    const result =  await studentModel.findById(req.params.id)
   res.render('edit',{data:result})

  }catch(error){
    res.send(error);
  }

    res.render("edit");
  };

  //----------------UPDATE-------------------------------

  static updateDoc = async(req, res) => {
    // console.log(req.params.id)
    // console.log(req.body)
    try {
        const { name, age, fees } = req.body;
  
        const doc = await studentModel.findByIdAndUpdate(req.params.id, req.body )
    }
    catch(error){
        res.send(error);
    }
    
    res.redirect("/");
  };

// ------------------DELETE-----------------

  static deleteDoc = async (req, res) => {
try{
    const result = await studentModel.findByIdAndDelete(req.params.id);
    // console.log(result);
}
    catch(error){
  console.log(error)
    }
    res.redirect("/");
  };


  //-------------------GET ALL DATA--------------------

  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();

      res.render("index", { data: result });
    } catch (error) {
      res.send(error);
    }
  };
}

export default studentController;
