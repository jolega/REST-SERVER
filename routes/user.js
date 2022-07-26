const { Router } = require('express') ;
const { check  } = require('express-validator')
const {userGet, 
       userPut, 
       userPost,
       userDelete,
       userPatch,
  }  = require('../controllers/user') ;

const router = Router ()
const { validateFields } = require('../middlewares/validate-fields');
const { isRoleValid }    = require('../helpers/db-validators')


router.get('/', userGet ) ;

router.put('/:id', userPut ) ;

router.post('/', [ 
  check('name', 'the name is not valid').not().isEmpty() ,
  check('password', 'the password is not valid minimum 6 letters ').isLength({ min: 6 }).not().isEmpty() ,
  check('email', 'the email is not valid').isEmail()  ,
  //check('role', 'the role is not valid').isIn(['ADMIN_ROLE','USER_ROLE']),
  check('role').custom( isRoleValid ), // ((role) => esRoleValido ( rol ))
  validateFields
], userPost ) ;

router.delete('/', userDelete ) ;

router.patch('/', userPatch ) ;



module.exports =router;