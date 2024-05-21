// import { Injectable } from '@nestjs/common';
// import { Company, CompanyModel } from '../../entities/models/company.model';
// import { CreateCompanyDto } from '../dto/create-company.dto';
// import * as bcrypt from 'bcrypt';
// import * as jwt from 'jsonwebtoken';

// @Injectable()
// export class AuthService {
//   constructor() {}

//   async register(createCompanyDto: CreateCompanyDto): Promise<Company> {
//     const { emailCompany, passwordCompany, role } = createCompanyDto;

//     const existingCompany = await CompanyModel.findOne({ emailCompany });
//     if (existingCompany) {
//       throw new Error('The company is already registered');
//     }

//     const hashedPassword = await bcrypt.hash(passwordCompany, 10);

//     const newCompany = new CompanyModel({
//       emailCompany,
//       passwordCompany: hashedPassword,
//       role,
//     });

//     return await newCompany.save();
//   }

//   async login(email: string, password: string): Promise<string> {
//     try {
//       const company = await CompanyModel.findOne({ emailCompany: email });

//       if (!company || !(await bcrypt.compare(password, company.passwordCompany))) {
//         throw new Error('Invalid credentialss');
//       }

//       const token = jwt.sign({ companyId: company._id, email: company.emailCompany }, 'secreto', { expiresIn: '1h' });

//       return token;
//     } catch (error) {
//       throw new Error('Invalid credentialss');
//     }
//   }
// }