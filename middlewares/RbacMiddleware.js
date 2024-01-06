const {UserRoles_Permissions} = require('../roles.json');

exports.checkPermission = (permission) => {
   return (req,res,next) => {
      const user_role = req.user_role;
      const AllPermissionsToRole = UserRoles_Permissions[user_role]

      if (AllPermissionsToRole.includes(permission)){
         next();
      }else{
         res.status(403).json({error: 'Access Denied'});
      }
   }
}