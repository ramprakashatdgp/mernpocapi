const user_added =require('../models/userModels');
const getUser = (req, res) => {
  res.send({
    success: true,
    message: "Data Coming From server",
  });
};

const addUser = (req, res) => {
  const { inputData } = req.body;
  
  res.json({
    success: true,
    message: `Welcome ${inputData}`,
  });
};

const createUser= async (req, res)=>{
try {
  //const {name,email,Password}=req.body;
  var inputData= req.body;
  await user_added.create(inputData, function(data){
     //res.render('user-form')
     console.log(" record was created");
  });
  //const user = new User({ name,email,Password });
  //const user_added = new User({name,email,Password});
  //await user_added.save();
  res.status(201).json({
   
    message:"success"
  }
    
  )

} catch (error) {
  console.log(error)
}
};

const getUserDetail= async (req, res)=>{
  try {
    const getdata=await user_added.find();
    console.log(getdata);
    res.status(200).json({
      "Data":getdata,
      message:"success"
    }
      
    )
  } catch (error) {
    console.log(error)
  }
  };

  const updateUser= async (req, res)=>{
    try {
    
      var myquery = { "name": req.body.name };
      var newvalues = { $set: { "Password": "Canyhhhhllon" } };
      await user_added.updateOne(myquery, newvalues)
      
      res.status(201).json({
       
        message:"success"
      }
        
      )
    } catch (error) {
      console.log(error)
    }
    };
    const deleteUser= async (req, res)=>{
      try {
      
        let myquery = { "name": req.body.name };
       
        await user_added.deleteOne(myquery)
        
        res.status(201).json({
         
          message:"success"
        }
          
        )
      } catch (error) {
        console.log(error)
      }
      };
module.exports = { getUser, addUser,createUser,getUserDetail,updateUser,deleteUser };
