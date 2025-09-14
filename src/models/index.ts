import { Company } from './company.model';
import { Department } from './department.model';
import { Employeee } from './employee.model';
import { EmployeeDocument } from './employeeDocument.model';
import { Expense } from './expense.model';
import { Income } from './income.model';
import { Leave } from './leave.model';
import { Payslip } from './payslip.model';
import { Project } from './project.model';
import { ProjectAssignment } from './projectAssignment.model';
import { PromotionSalaryHistory } from './promotionSalaryHistory.model';
import { Timesheet } from './timesheet.model';
import { User } from './user.model';

export const models = [
  Company,
  Department,
  Employeee,
  User,
  EmployeeDocument,
  PromotionSalaryHistory,
  Payslip,
  Project,
  ProjectAssignment,
  Expense,
  Income,
  Leave,
  Timesheet,
];
