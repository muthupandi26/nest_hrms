import { Company } from 'src/models/company.model';
import { Department } from 'src/models/department.model';
import { Employee } from 'src/models/employee.model';
import { User } from 'src/models/user.model';
import { EmployeeDocument } from 'src/models/employeeDocument.model';

import { Payslip } from 'src/models/payslip.model';
import { Project } from 'src/models/project.model';
import { ProjectAssignment } from 'src/models/projectAssignment.model';
import { Expense } from 'src/models/expense.model';
import { Income } from 'src/models/income.model';
import { Leave } from 'src/models/leave.model';
import { Timesheet } from 'src/models/timesheet.model';
import { PromotionSalaryHistory } from 'src/models/promotionSalaryHistory.model';

export function setupAssociations() {
  Company.hasMany(Department, { foreignKey: 'companyId' });
  Department.belongsTo(Company, { foreignKey: 'companyId' });

  Company.hasMany(Employee, { foreignKey: 'companyId' });
  Employee.belongsTo(Company, { foreignKey: 'companyId' });

  Department.hasMany(Employee, { foreignKey: 'departmentId' });
  Employee.belongsTo(Department, { foreignKey: 'departmentId' });

  Employee.hasMany(Employee, { foreignKey: 'managerId', as: 'Subordinates' });
  Employee.belongsTo(Employee, { foreignKey: 'managerId', as: 'Manager' });

  Employee.hasOne(User, { foreignKey: 'employeeId' });
  User.belongsTo(Employee, { foreignKey: 'employeeId' });

  Company.hasMany(EmployeeDocument, { foreignKey: 'companyId' });
  Employee.hasMany(EmployeeDocument, { foreignKey: 'employeeId' });
  EmployeeDocument.belongsTo(Company, { foreignKey: 'companyId' });
  EmployeeDocument.belongsTo(Employee, { foreignKey: 'employeeId' });
  Employee.hasMany(EmployeeDocument, {
    foreignKey: 'verifiedBy',
    as: 'VerifiedDocuments',
  });
  EmployeeDocument.belongsTo(Employee, {
    foreignKey: 'verifiedBy',
    as: 'Verifier',
  });

  Company.hasMany(PromotionSalaryHistory, { foreignKey: 'companyId' });
  Employee.hasMany(PromotionSalaryHistory, { foreignKey: 'employeeId' });

  Company.hasMany(Payslip, { foreignKey: 'companyId' });
  Employee.hasMany(Payslip, { foreignKey: 'employeeId' });

  Company.hasMany(Project, { foreignKey: 'companyId' });
  Department.hasMany(Project, { foreignKey: 'departmentId' });

  Project.hasMany(ProjectAssignment, { foreignKey: 'projectId' });
  Company.hasMany(ProjectAssignment, { foreignKey: 'companyId' });
  Employee.hasMany(ProjectAssignment, { foreignKey: 'employeeId' });

  Company.hasMany(Expense, { foreignKey: 'companyId' });
  Project.hasMany(Expense, { foreignKey: 'projectId' });

  Company.hasMany(Income, { foreignKey: 'companyId' });
  Project.hasMany(Income, { foreignKey: 'projectId' });

  Company.hasMany(Leave, { foreignKey: 'companyId' });
  Employee.hasMany(Leave, { foreignKey: 'employeeId' });
  Employee.hasMany(Leave, { foreignKey: 'approvedBy', as: 'ApprovedLeaves' });

  Company.hasMany(Timesheet, { foreignKey: 'companyId' });
  Employee.hasMany(Timesheet, { foreignKey: 'employeeId' });
  Project.hasMany(Timesheet, { foreignKey: 'projectId' });
}
