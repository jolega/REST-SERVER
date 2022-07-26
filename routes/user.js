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
const Role = require('../models/role');


router.get('/', userGet ) ;

router.put('/:id', userPut ) ;

router.post('/', [ 
  check('name', 'the name is not valid').not().isEmpty() ,
  check('password', 'the password is not valid minimum 6 letters ').isLength({ min: 6 }).not().isEmpty() ,
  check('email', 'the email is not valid').isEmail()  ,
  //check('role', 'the role is not valid').isIn(['ADMIN_ROLE','USER_ROLE']),
  check('role').custom( async (role = '') => {
    const  existsRole = await Role.findOne({ role }) ;
    if( !existsRole ) {
       throw new Error(`the rol ${ rol } not register form base date `) 
    }

  }),
  validateFields
], userPost ) ;

router.delete('/', userDelete ) ;

router.patch('/', userPatch ) ;



module.exports =router;