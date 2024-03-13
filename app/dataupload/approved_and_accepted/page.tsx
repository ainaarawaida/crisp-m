"use client";

import { useMemo, useState } from 'react';
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  // createRow,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
} from 'material-react-table';
import collect from 'collect.js';

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";
import Header from "@/components/shadcn/header";

type User = {
  id: string;
  year_month:string;
};


const Example = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        Edit: () => null,
        size: 80,
        enableHiding: false ,
      },
      {
        accessorKey: 'year_month',
        header: 'Year Month',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.year_month,
          helperText: validationErrors?.year_month,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              year_month: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: 'number_of_accounts',
        header: 'number_of_accounts',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.number_of_accounts,
          helperText: validationErrors?.number_of_accounts,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              number_of_accounts: undefined,
            }),
        },
      },
      {
        accessorKey: 'monthly_average_accounts',
        header: 'monthly_average_accounts',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.monthly_average_accounts,
          helperText: validationErrors?.monthly_average_accounts,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              monthly_average_accounts: undefined,
            }),
        },
      },
      {
        accessorKey: 'home_financing_amount',
        header: 'home_financing_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.home_financing_amount,
          helperText: validationErrors?.home_financing_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              home_financing_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'monthly_average_amount',
        header: 'monthly_average_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.monthly_average_amount,
          helperText: validationErrors?.monthly_average_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              monthly_average_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'age_generation_number_of_accounts',
        header: 'age_generation_number_of_accounts',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.age_generation_number_of_accounts,
          helperText: validationErrors?.age_generation_number_of_accounts,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              age_generation_number_of_accounts: undefined,
            }),
        },
      },
      {
        accessorKey: 'gender_number_of_accounts',
        header: 'gender_number_of_accounts',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.gender_number_of_accounts,
          helperText: validationErrors?.gender_number_of_accounts,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              gender_number_of_accounts: undefined,
            }),
        },
      },
      {
        accessorKey: 'approved_account_by_state_property_account',
        header: 'approved_account_by_state_property_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.approved_account_by_state_property_account,
          helperText: validationErrors?.approved_account_by_state_property_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              approved_account_by_state_property_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'approved_account_by_state_property_amount',
        header: 'approved_account_by_state_property_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.approved_account_by_state_property_amount,
          helperText: validationErrors?.approved_account_by_state_property_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              approved_account_by_state_property_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'salary_range_account',
        header: 'salary_range_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.salary_range_account,
          helperText: validationErrors?.salary_range_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              salary_range_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'salary_range_amount',
        header: 'salary_range_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.salary_range_amount,
          helperText: validationErrors?.salary_range_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              salary_range_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'service_category_account',
        header: 'service_category_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.service_category_account,
          helperText: validationErrors?.service_category_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              service_category_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'service_category_amount',
        header: 'service_category_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.service_category_amount,
          helperText: validationErrors?.service_category_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              service_category_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'home_financing_ticket_size_account',
        header: 'home_financing_ticket_size_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.home_financing_ticket_size_account,
          helperText: validationErrors?.home_financing_ticket_size_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              home_financing_ticket_size_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'home_financing_ticket_size_amount',
        header: 'home_financing_ticket_size_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.home_financing_ticket_size_amount,
          helperText: validationErrors?.home_financing_ticket_size_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              home_financing_ticket_size_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'tenure_range_account',
        header: 'tenure_range_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.tenure_range_account,
          helperText: validationErrors?.tenure_range_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              tenure_range_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'tenure_range_amount',
        header: 'tenure_range_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.tenure_range_amount,
          helperText: validationErrors?.tenure_range_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              tenure_range_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'account_types_account',
        header: 'account_types_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.account_types_account,
          helperText: validationErrors?.account_types_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              account_types_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'account_types_amount',
        header: 'account_types_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.account_types_amount,
          helperText: validationErrors?.account_types_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              account_types_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'financing_schemes_account',
        header: 'financing_schemes_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.financing_schemes_account,
          helperText: validationErrors?.financing_schemes_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              financing_schemes_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'financing_schemes_amount',
        header: 'financing_schemes_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.financing_schemes_amount,
          helperText: validationErrors?.financing_schemes_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              financing_schemes_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'financing_types_account',
        header: 'financing_types_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.financing_types_account,
          helperText: validationErrors?.financing_types_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              financing_types_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'financing_types_amount',
        header: 'financing_types_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.financing_types_amount,
          helperText: validationErrors?.financing_types_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              financing_types_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'property_price_range_account',
        header: 'property_price_range_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.property_price_range_account,
          helperText: validationErrors?.property_price_range_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              property_price_range_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'property_price_range_amount',
        header: 'property_price_range_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.property_price_range_amount,
          helperText: validationErrors?.property_price_range_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              property_price_range_amount: undefined,
            }),
        },
      },
      {
        accessorKey: 'house_types_account',
        header: 'house_types_account',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.house_types_account,
          helperText: validationErrors?.house_types_account,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              house_types_account: undefined,
            }),
        },
      },
      {
        accessorKey: 'house_types_amount',
        header: 'house_types_amount',
        muiEditTextFieldProps: {
          required: false,
          error: !!validationErrors?.house_types_amount,
          helperText: validationErrors?.house_types_amount,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              house_types_amount: undefined,
            }),
        },
      },
    ],
    [validationErrors],
  );

  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  //call UPDATE hook
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

  //CREATE action
  const handleCreateUser: MRT_TableOptions<User>['onCreatingRowSave'] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values, table);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    table.setCreatingRow(null); //exit creating mode
  };

  //UPDATE action
  const handleSaveUser: MRT_TableOptions<User>['onEditingRowSave'] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values, table);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row: MRT_Row<User>) => {
    if (window.confirm('Are you sure you want to delete this data?')) {
      deleteUser(row.original.year_month);
    }
  };

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    initialState: { columnVisibility: { id: false, year_month: true } },
    createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
    editDisplayMode: 'modal', //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    enableRowNumbers: true,
    rowNumberDisplayMode: 'static',
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: 'error',
          children: 'Error loading data',
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: '500px',
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    //optionally customize modal content
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New Data</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    //optionally customize modal content
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit Data</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Create New Data
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return (
    <>
      <Header />
    
      <ScrollArea className="h-full pt-12">
    
        {/* <div className="flex-1 space-y-4 p-4 md:p-8 pt-6"> */}
      
          <div className="p-12 block w-screen" style={{ overflowX: 'auto' }}>
          
            <MaterialReactTable table={table} />

          
          </div>

     

         
        {/* </div> */}
      </ScrollArea>
    </>
  ) ;
  
};

//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      // console.log("dddd", useGetUsers())

      try {
        // let dataArray = new FormData();
        // dataArray.append("User[clientId]", "lppsa");
        let response = await fetch(`${process.env.NEXT_PUBLIC_BASEPATH_URL}/api/data/accepted`, {
          method: "POST",
          body: JSON.stringify(user),
        });

     
        // const response  = await fetch('/api/data/active_borrowers_accounts');
        const data = await response.json();
        // console.log('ggg',await data); // Access the parsed JSON data here
        return await data ;
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      //send api update request here
      // await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      // return Promise.resolve();

    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ['users'],
        (prevUsers: any) =>
          [
            ...prevUsers,
            {
              ...newUserInfo
              // ...newUserInfo,
              // id: User.id,
            },
          ] as User[],
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//READ hook (get users from api)
function useGetUsers() {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const response  = await fetch(`${process.env.NEXT_PUBLIC_BASEPATH_URL}/api/data/accepted`);
        const data = await response.json();
        // console.log(await data); // Access the parsed JSON data here
        return await data ;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      //send api request here
      // await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      // return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      try {
        // let dataArray = new FormData();
        // dataArray.append("User[clientId]", "lppsa");
        let response = await fetch(`${process.env.NEXT_PUBLIC_BASEPATH_URL}/api/data/accepted/${user.year_month}`, {
          method: "POST",
          body: JSON.stringify(user),
        });

     
        // const response  = await fetch('/api/data/active_borrowers_accounts');
        const data = await response.json();
        // console.log('ggg',await data); // Access the parsed JSON data here
        return await data ;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      // await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      // return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(['users'], (prevUsers: any) =>
        prevUsers?.map((prevUser: User) =>
          prevUser.id === newUserInfo.id ? newUserInfo : prevUser,
        ),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      try {
        // let dataArray = new FormData();
        // dataArray.append("User[clientId]", "lppsa");
        // console.log("user",user.year_month)
        let response = await fetch(`${process.env.NEXT_PUBLIC_BASEPATH_URL}/api/data/accepted/${userId}`, {
          method: "DELETE",
        });

     
        // const response  = await fetch('/api/data/active_borrowers_accounts');
        const data = await response.json();
        // console.log('ggg',await data); // Access the parsed JSON data here
        return await data ;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    //client side optimistic update
    onMutate: (userId: string) => {
      queryClient.setQueryData(['users'], (prevUsers: any) =>
        prevUsers?.filter((user: User) => user.year_month !== userId),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

export default ExampleWithProviders;

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

function validateUser(user: User, table:any) {
  const currentData = table.getRowModel().rows;
  const allData = table.getSortedRowModel().rows;
  
  let exists = false ;
  for(let a = 0 ; a < allData.length ; a ++){
      if(allData[a].original.year_month == user.year_month){
        exists = true;
        break ;
      }
  }
if (exists) {
  return {
    year_month:'Duplicate value found in the unique column!'
  };
}


  
  // const existingValues = new Set(data.map((row:any) => row['year_month']));
  // console.log("fff",table.getSortedRowModel())
      // if (existingValues.has(user['year_month'])) {
      //   // Display error message (e.g., using a toast notification library)
      //   console.error('Duplicate value found in the unique column!');
      //   return {
      //     year_month:'Duplicate value found in the unique column!'
      //   }; // Prevent adding the row if not unique
      // }
      
  return {
    // firstName: !validateRequired(user.firstName)
    //   ? 'First Name is Required'
    //   : '',
    // lastName: !validateRequired(user.lastName) ? 'Last Name is Required' : '',
    // email: !validateEmail(user.email) ? 'Incorrect Email Format' : '',
  };
}
