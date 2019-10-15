const express = require('express');
const employeeRouter = express.Router();
const Employee = require('../model/Employee');

//CRUD

//read
employeeRouter.get('/',(req,res)=>{
    Employee.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to get employees",
                msgError : true
            }});
        else{
            res.status(200).json({response});
        }
            
    });
});

//create
employeeRouter.post('/',(req,res)=>{
    const employee = new Employee(req.body);
    employee.save((err,document)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to add employee",
                msgError : true
            }});
        else
            res.status(200).json({message:{
                msgBody: "Successfully Added Employee",
                msgError : false
            }});
    });
});

// delete
employeeRouter.delete('/:id',(req,res)=>{
    Employee.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Delete Employee",
                msgError : true
            }});  
        else
            res.status(200).json({message:{
                msgBody: "Successfully Deleted Employee",
                msgError : false
            }});     
    });
});

//update 
employeeRouter.put('/:id',(req,res)=>{
    Employee.findOneAndUpdate({_id : req.params.id},req.body,{runValidators: true},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Update Employee",
                msgError : true
            }});
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated Employee",
            msgError : false
        }});   
    });
});

module.exports = employeeRouter;