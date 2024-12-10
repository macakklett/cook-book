// import type { Employee, EmployeesByYear, SortingEmployees } from '@/types';

// export const sortByYears = (arr: Employee[]): EmployeesByYear => {
//   return arr.reduce<EmployeesByYear>((acc, emp) => {
//     const year = new Date(emp.birthDate).getFullYear();
//     return {
//       ...acc,
//       [year]: acc[year] ? [...acc[year], emp] : [emp],
//     };
//   }, {});
// };

// export const compareEmployees =
//   (sortBy: SortingEmployees) =>
//   (a: Employee, b: Employee): number =>
//     sortBy === 'birthDate' ? a.birthDate - b.birthDate : a.name.localeCompare(b.name);
