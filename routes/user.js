const { Router } = require('express') ;
const { check  } = require('express-validator')
const {userGet, 
       userPut, 
       userPost,
       userDelete,
       userPatch,
       userInactive,
  }  = require('../controllers/user') ;

const router = Router ()
const { validateFields } = require('../middlewares/validate-fields');
const { isRoleValid, isEmailValid, existUserForId }    = require('../helpers/db-validators')


router.get('/', userGet ) ;

router.put('/:id', [
    check('id','Not is a Id validate ').isMongoId(),
    check('id').custom( existUserForId ),
    check('role').custom( isRoleValid ),
    validateFields
], userPut ) ;

router.post('/', [ 
  check('name', 'the name is not valid').not().isEmpty() ,
  check('password', 'the password is not valid minimum 6 letters ').isLength({ min: 6 }).not().isEmpty() ,
  check('email', 'the email is not valid').isEmail()  ,
  check('email').custom( isEmailValid ), 
  //check('role', 'the role is not valid').isIn(['ADMIN_ROLE','USER_ROLE']),
  check('role').custom( isRoleValid ), // ((role) => esRoleValido ( rol ))
  validateFields
], userPost ) ;

router.delete('/:id', [
  check('id','Not is a Id validate ').isMongoId(),
  check('id').custom( existUserForId ),
  validateFields
], userInactive ) ;

router.patch('/', userPatch ) ;



module.exports =router;