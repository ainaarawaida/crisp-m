import { NextResponse } from "next/server";
import prisma from '@/prisma/prisma';
import { useRouter } from 'next/router';

export async function GET(_request: Request,{ params }: { params: { data: string } }) {
  // const { searchParams } = new URL(_request.url)
  // const ta = searchParams.get('id')
  if(params?.data[0] == 'all'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const active_borrowers_accounts  = await prisma.$queryRaw`
      SELECT *, CAST(id AS int) as id
        FROM active_borrowers_accounts 
        ORDER BY year_month desc LIMIT 1;
    `;

        const accepted  = await prisma.$queryRaw`
          SELECT *, CAST(id AS int) as id
            FROM accepted 
            ORDER BY year_month desc LIMIT 1;
        `;

        const revenue  = await prisma.$queryRaw`
          SELECT *, CAST(id AS int) as id
            FROM revenue 
            ORDER BY year_month desc LIMIT 1;
        `;

        const expences  = await prisma.$queryRaw`
          SELECT *, CAST(id AS int) as id
            FROM expences 
            ORDER BY year_month desc LIMIT 1;
        `;

        const surplus  = await prisma.$queryRaw`
          SELECT *, CAST(id AS int) as id
            FROM surplus 
            ORDER BY year_month desc LIMIT 1;
        `;

        const assets  = await prisma.$queryRaw`
          SELECT *, CAST(id AS int) as id
            FROM assets 
            ORDER BY year_month desc LIMIT 1;
        `;

        const disbursement  = await prisma.$queryRaw`
        SELECT *, CAST(id AS int) as id
          FROM disbursement 
          ORDER BY year_month desc LIMIT 1;
      `;

      const collection  = await prisma.$queryRaw`
      SELECT *, CAST(id AS int) as id
        FROM collection 
        ORDER BY year_month desc LIMIT 1;
    `;

      const financial_ratios  = await prisma.$queryRaw`
      SELECT *, CAST(id AS int) as id
        FROM financial_ratios 
        ORDER BY year desc LIMIT 1;
      `;
      return NextResponse.json({
        active_borrowers_accounts,
        accepted,
        revenue,
        expences,
        surplus,
        assets,
        disbursement,
        collection,
        financial_ratios

      });
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }

  }else if(params?.data[0] == 'active_borrowers_accounts'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM active_borrowers_accounts ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'accepted'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM accepted ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'assets'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM assets ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'collection'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM collection ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'disbursement'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM disbursement ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'expences'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM expences ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'financial_ratios'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM financial_ratios ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'impairment'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM impairment ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'liabilities'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM liabilities ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'revenue'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM revenue ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'surplus'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM surplus ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }else if(params?.data[0] == 'taxation'){
    try {
      // const users = await prisma.active_borrowers_accounts.findMany();
      // return NextResponse.json(users);
      const result  = await prisma.$queryRaw`
      SELECT *, CAST(id AS text) as id FROM taxation ORDER BY year_month desc;
    `;
      // const result = await prisma.$queryRawUnsafe`SELECT * FROM active_borrowers_accounts `;
      return NextResponse.json(result);
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(error);
    }
  }
  return NextResponse.json([]); 



}


export async function POST(req: Request) {
  const url = new URL(req.url);
  const pathSegments = url.pathname.split('/');
  // console.log("pathSegments",pathSegments)
  if(pathSegments[3] == 'active_borrowers_accounts'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO active_borrowers_accounts (year_month,
        number_of_active_accounts, outstanding_balance_net, islamic_accounts,
        conventional_accounts, civil_servants_in_service, pensioner_retired, arahan_bayar_balik, other_cases)
      VALUES (${data.year_month}, ${parseFloat(data.number_of_active_accounts)},
      ${parseFloat(data.outstanding_balance_net)},${parseFloat(data.islamic_accounts)},
      ${parseFloat(data.conventional_accounts)},${parseFloat(data.civil_servants_in_service)},
      ${parseFloat(data.pensioner_retired)},
      ${parseFloat(data.arahan_bayar_balik)},
      ${parseFloat(data.other_cases)})
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      number_of_active_accounts = ${parseFloat(data.number_of_active_accounts)}, 
      outstanding_balance_net = ${parseFloat(data.outstanding_balance_net)}, 
      islamic_accounts = ${parseFloat(data.islamic_accounts)},
      conventional_accounts = ${parseFloat(data.conventional_accounts)}, 
      civil_servants_in_service = ${parseFloat(data.civil_servants_in_service)}, 
      pensioner_retired = ${parseFloat(data.pensioner_retired)},
      pensioner_retired = ${parseFloat(data.arahan_bayar_balik)},
      pensioner_retired = ${parseFloat(data.other_cases)}
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'accepted'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO accepted (year_month,
        number_of_accounts, 
        monthly_average_accounts, 
        home_financing_amount,
        monthly_average_amount, 
        age_generation_number_of_accounts, 
        gender_number_of_accounts,
        approved_account_by_state_property_account,
        approved_account_by_state_property_amount,
        salary_range_account,
        salary_range_amount,
        service_category_account,
        service_category_amount,
        home_financing_ticket_size_account,
        home_financing_ticket_size_amount,
        tenure_range_account,
        tenure_range_amount,
        account_types_account,
        account_types_amount,
        financing_schemes_account,
        financing_schemes_amount,
        financing_types_account,
        financing_types_amount,
        property_price_range_account,
        property_price_range_amount,
        house_types_account,
        house_types_amount)
      VALUES (${data.year_month}, 
        ${parseFloat(data.number_of_accounts)}, 
        ${parseFloat(data.monthly_average_accounts)}, 
        ${parseFloat(data.home_financing_amount)}, 
        ${parseFloat(data.monthly_average_amount)}, 
        ${parseFloat(data.age_generation_number_of_accounts)}, 
        ${parseFloat(data.gender_number_of_accounts)}, 
        ${parseFloat(data.approved_account_by_state_property_account)}, 
        ${parseFloat(data.approved_account_by_state_property_amount)}, 
        ${parseFloat(data.salary_range_account)}, 
        ${parseFloat(data.salary_range_amount)}, 
        ${parseFloat(data.service_category_account)}, 
        ${parseFloat(data.service_category_amount)}, 
        ${parseFloat(data.home_financing_ticket_size_account)}, 
        ${parseFloat(data.home_financing_ticket_size_amount)}, 
        ${parseFloat(data.tenure_range_account)}, 
        ${parseFloat(data.tenure_range_amount)}, 
        ${parseFloat(data.account_types_account)}, 
        ${parseFloat(data.account_types_amount)}, 
        ${parseFloat(data.financing_schemes_account)}, 
        ${parseFloat(data.financing_schemes_amount)}, 
        ${parseFloat(data.financing_types_account)}, 
        ${parseFloat(data.financing_types_amount)}, 
        ${parseFloat(data.property_price_range_account)}, 
        ${parseFloat(data.property_price_range_amount)}, 
        ${parseFloat(data.house_types_account)} )
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      number_of_active_accounts = ${parseFloat(data.number_of_active_accounts)}, 
      number_of_accounts = ${parseFloat(data.number_of_accounts)}, 
      monthly_average_accounts = ${parseFloat(data.monthly_average_accounts)}, 
      home_financing_amount = ${parseFloat(data.home_financing_amount)}, 
      monthly_average_amount = ${parseFloat(data.monthly_average_amount)}, 
      age_generation_number_of_accounts = ${parseFloat(data.age_generation_number_of_accounts)}, 
      gender_number_of_accounts = ${parseFloat(data.gender_number_of_accounts)}, 
      approved_account_by_state_property_account = ${parseFloat(data.approved_account_by_state_property_account)}, 
      approved_account_by_state_property_amount = ${parseFloat(data.approved_account_by_state_property_amount)}, 
      salary_range_account = ${parseFloat(data.salary_range_account)}, 
      salary_range_amount = ${parseFloat(data.salary_range_amount)}, 
      service_category_account = ${parseFloat(data.service_category_account)}, 
      service_category_amount = ${parseFloat(data.service_category_amount)}, 
      home_financing_ticket_size_account = ${parseFloat(data.home_financing_ticket_size_account)}, 
      home_financing_ticket_size_amount = ${parseFloat(data.home_financing_ticket_size_amount)}, 
      tenure_range_account = ${parseFloat(data.tenure_range_account)}, 
      tenure_range_amount = ${parseFloat(data.tenure_range_amount)}, 
      account_types_account = ${parseFloat(data.account_types_account)}, 
      account_types_amount = ${parseFloat(data.account_types_amount)}, 
      financing_schemes_account = ${parseFloat(data.financing_schemes_account)}, 
      financing_schemes_amount = ${parseFloat(data.financing_schemes_amount)}, 
      financing_types_account = ${parseFloat(data.financing_types_account)}, 
      financing_types_amount = ${parseFloat(data.financing_types_amount)}, 
      property_price_range_account = ${parseFloat(data.property_price_range_account)}, 
      property_price_range_amount = ${parseFloat(data.property_price_range_amount)}, 
      house_types_account = ${parseFloat(data.house_types_account)} )
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'assets'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO assets (year_month,
        total_assets,
        cash_and_cash_equivalent,
        investment,
        home_financing,
        other_receivables,
        property_and_equipment)
      VALUES (${data.year_month}, 
      ${parseFloat(data.total_assets)}, 
      ${parseFloat(data.cash_and_cash_equivalent)}, 
      ${parseFloat(data.investment)}, 
      ${parseFloat(data.home_financing)}, 
      ${parseFloat(data.other_receivables)}, 
      ${parseFloat(data.property_and_equipment)})
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      total_assets = ${parseFloat(data.total_assets)}, 
      cash_and_cash_equivalent = ${parseFloat(data.cash_and_cash_equivalent)}, 
      investment = ${parseFloat(data.investment)}, 
      home_financing = ${parseFloat(data.home_financing)}, 
      other_receivables = ${parseFloat(data.other_receivables)}, 
      property_and_equipment = ${parseFloat(data.property_and_equipment)}
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'collection'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO collection (year_month,
      non_cagamas, 
      total_collection
        )
      VALUES (${data.year_month}, 
      ${parseFloat(data.non_cagamas)},
      ${parseFloat(data.total_collection)}
      )
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      non_cagamas = ${parseFloat(data.non_cagamas)}, 
      total_collection = ${parseFloat(data.total_collection)}
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'disbursement'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO disbursement (year_month,
        total_disbursement)
      VALUES (${data.year_month}, 
        ${parseFloat(data.total_disbursement)})
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      total_disbursement = ${parseFloat(data.total_disbursement)}
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'expences'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO expences (year_month,
        expences,
        hr_exp_and_employee_benefit,
        administrative_exp,
        depreciation_exp,
        finance_exp,
        professional_fees,
        other_exp,
        budgeted_expenses
          
          )
      VALUES (${data.year_month}, 
        ${parseFloat(data.expences)}, 
        ${parseFloat(data.hr_exp_and_employee_benefit)}, 
        ${parseFloat(data.administrative_exp)}, 
        ${parseFloat(data.depreciation_exp)}, 
        ${parseFloat(data.finance_exp)}, 
        ${parseFloat(data.professional_fees)}, 
        ${parseFloat(data.other_exp)}, 
        ${parseFloat(data.budgeted_expenses)}
      )
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      expences = ${parseFloat(data.expences)}, 
      hr_exp_and_employee_benefit = ${parseFloat(data.hr_exp_and_employee_benefit)}, 
      administrative_exp = ${parseFloat(data.administrative_exp)}, 
      depreciation_exp = ${parseFloat(data.depreciation_exp)}, 
      finance_exp = ${parseFloat(data.finance_exp)}, 
      professional_fees = ${parseFloat(data.professional_fees)}, 
      other_exp = ${parseFloat(data.other_exp)}, 
      budgeted_expenses = ${parseFloat(data.budgeted_expenses)}
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'financial_ratios'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO financial_ratios (year,
        ${parseFloat(data.cost_income_ratio_excluding_impairment)}, 
${parseFloat(data.total_expenses_exc_impairment)}, 
${parseFloat(data.total_revenue)}, 
${parseFloat(data.sustainability_operating_ratio)}, 
${parseFloat(data.total_expenses_exc_finance_exp_impairment_tax)}, 
${parseFloat(data.finance_income_other_income)}
        
        )
      VALUES (${data.year}, 
        ${parseFloat(data.cost_income_ratio_excluding_impairment)}, 
        ${parseFloat(data.total_expenses_exc_impairment)}, 
        ${parseFloat(data.total_revenue)}, 
        ${parseFloat(data.sustainability_operating_ratio)}, 
        ${parseFloat(data.total_expenses_exc_finance_exp_impairment_tax)}, 
        ${parseFloat(data.finance_income_other_income)}
)
      ON CONFLICT (year) DO UPDATE 
      SET 
      cost_income_ratio_excluding_impairment = ${parseFloat(data.cost_income_ratio_excluding_impairment)}, 
      total_expenses_exc_impairment = ${parseFloat(data.total_expenses_exc_impairment)}, 
      total_revenue = ${parseFloat(data.total_revenue)}, 
      sustainability_operating_ratio = ${parseFloat(data.sustainability_operating_ratio)}, 
      total_expenses_exc_finance_exp_impairment_tax = ${parseFloat(data.total_expenses_exc_finance_exp_impairment_tax)}, 
      finance_income_other_income = ${parseFloat(data.finance_income_other_income)}
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'impairment'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO impairment (year_month,
        impairment,
        home_financing, other_receivables,
        budgeted_impairment
        )
      VALUES (${data.year_month}, 
        ${parseFloat(data.impairment)}, 
        ${parseFloat(data.home_financing)}, 
        ${parseFloat(data.other_receivables)}, 
        ${parseFloat(data.budgeted_impairment)}
)
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      impairment = ${parseFloat(data.impairment)}, 
      home_financing = ${parseFloat(data.home_financing)}, 
      other_receivables = ${parseFloat(data.other_receivables)}, 
      budgeted_impairment = ${parseFloat(data.budgeted_impairment)}
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'liabilities'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO liabilities (year_month,
        total_liabilities,
        borrowings,
        other_payables,
        other_liabilities
        )
      VALUES (${data.year_month}, 
      ${parseFloat(data.total_liabilities)}, 
      ${parseFloat(data.borrowings)}, 
      ${parseFloat(data.other_payables)}, 
      ${parseFloat(data.other_liabilities)}
      )
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      total_liabilities = ${parseFloat(data.total_liabilities)}, 
      borrowings = ${parseFloat(data.borrowings)}, 
      other_payables = ${parseFloat(data.other_payables)}, 
      other_liabilities = ${parseFloat(data.other_liabilities)}
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'revenue'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO revenue (year_month,
        revenue, 
        operating_income,
        utilisation_of_grant,
        finance_income,
        securitisation_income,
        other_income,
        budgeted_revenue)
      VALUES (${data.year_month}, 
        ${parseFloat(data.revenue)}, 
        ${parseFloat(data.operating_income)}, 
        ${parseFloat(data.utilisation_of_grant)}, 
        ${parseFloat(data.finance_income)}, 
        ${parseFloat(data.securitisation_income)}, 
        ${parseFloat(data.other_income)}, 
        ${parseFloat(data.budgeted_revenue)}
      )
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      revenue = ${parseFloat(data.revenue)}, 
      operating_income = ${parseFloat(data.operating_income)}, 
      utilisation_of_grant = ${parseFloat(data.utilisation_of_grant)}, 
      finance_income = ${parseFloat(data.finance_income)}, 
      securitisation_income = ${parseFloat(data.securitisation_income)}, 
      other_income = ${parseFloat(data.other_income)}, 
      budgeted_revenue = ${parseFloat(data.budgeted_revenue)}
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'surplus'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO surplus (year_month,
        surplus, budgeted_surplus
        )
      VALUES (${data.year_month}, 
        ${parseFloat(data.surplus)},
      ${parseFloat(data.budgeted_surplus)}
      )
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      surplus = ${parseFloat(data.surplus)}, 
      budgeted_surplus = ${parseFloat(data.budgeted_surplus)}
    
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }else if(pathSegments[3] == 'taxation'){
    try {
      let data = await req.json();
  
      await prisma.$executeRaw`
      INSERT INTO taxation (year_month,
        taxation, budgeted_taxation
        )
      VALUES (${data.year_month}, 
        ${parseFloat(data.taxation)},
      ${parseFloat(data.budgeted_taxation)}
      )
      ON CONFLICT (year_month) DO UPDATE 
      SET 
      taxation = ${parseFloat(data.taxation)}, 
      budgeted_taxation = ${parseFloat(data.budgeted_taxation)}
      
     
      ;`;
  
  
      return NextResponse.json(data);
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Validation failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
  
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            status: "fail",
            message: "user with that email already exists",
          },
          { status: 409 }
        );
      }
  
      return NextResponse.json(
        {
          status: "error",
          message: error.message || "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }
  // console.log("Request",req)
  return NextResponse.json([]); 

}

export async function DELETE(_request: Request,{ params }: { params: { data: string } }) {
  
  if(params?.data[0] == 'active_borrowers_accounts'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "active_borrowers_accounts" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'accepted'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "accepted" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'assets'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "assets" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'collection'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "collection" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'disbursement'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "disbursement" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'expences'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "expences" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'financial_ratios'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "financial_ratios" WHERE year = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'impairment'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "impairment" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'liabilities'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "liabilities" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'revenue'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "revenue" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'surplus'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "surplus" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }else if(params?.data[0] == 'taxation'){
   
    try {
      await prisma.$executeRaw`
      DELETE FROM "taxation" WHERE year_month = ${params?.data[1]};
    `;
      return NextResponse.json({
        message: "Deletion successful",
      },
      { status: 200 });
    } catch (error: any) {
  
        return NextResponse.json(
          {
            status: "error",
            message: "Deletion failed",
            errors: error.errors,
          },
          { status: 400 }
        );
    
    }
  }
  // console.log("Request",req)
  return NextResponse.json([]); 

}

