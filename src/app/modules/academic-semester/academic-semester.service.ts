import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { academicSemesterTitleCodeMapper } from './academic-semester.constant'
import { IAcademicSemester } from './academic-semester.interface'
import { AcademicSemester } from './academic-semester.model'

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  // Summer  02 !=== 03
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
  }

  const result = await AcademicSemester.create(payload)
  return result
}

export const AcademicSemesterService = {
  createSemester,
}
