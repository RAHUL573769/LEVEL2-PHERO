import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
// import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';
// import { AcademicSemesterControllers } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  //   validateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty,
);

// router.get(
//   '/:academicFacultyId',
//   AcademicFacultyControllers.createAcademicFaculty,
// );

router.patch(
  '/:id',

  AcademicFacultyControllers.updateAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculty);
router.get('/:id', AcademicFacultyControllers.getSingleAcademicFaculty);

export const AcademicFacultyRoutes = router;
