const Profile = require("../model/profile.model");

exports.showProfilePage = async (req,res) => {
    try {
        let profile = await Profile.find();
        res.render("profile.ejs",{profile})
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.profilePage = async (req,res) => {
    try{
        let profile = await Profile.findOne({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email})
        if(profile){
            res.json({message:"Already Added"});
        }
        profile = await Profile.create(req.body);
        res.redirect("/api/profile/")
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
