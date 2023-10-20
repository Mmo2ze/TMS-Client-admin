'use client'
import React , {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor
} from "@nextui-org/react";
// import {favicon} from "./favicon";
// import {favicon} from "./favicon";
// import {favicon} from "./favicon";
// import {favicon} from "./favicon";
// import {favicon} from "./utils"; capitalize

// import favicon from "@mui/icons-material/CalendarMonth";
import favicon from './favicon.ico';
import Inputs from "../inputs/Inputs";
import Buttons from "../buttons/Buttons";
import MoreVertIcon from '@mui/icons-material/MoreVert';
interface InputsProps {
  label: string;
  inputPlaceholder: string;
  typeInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "end", "status", "actions"];

type User = typeof users[0];



const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "Subject", uid: "subject", sortable: true},
  {name: "EndOfSubscription", uid: "end", sortable: true},
  {name: "Phone", uid: "phone"},
  {name: "PaymentPrice", uid: "paymentPrice"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

[
  {
      "endOfSubscription": "2026-05-11",
      "id": 4,
      "name": "Rochelle Wehner V",
      "phone": "01145866623",
      "subject": "English",
      "status": "Active",
      "paymentPrice": 757,
      "payments": null
  },
  {
      // "endOfSubscription": "2023-10-13",
      // "id": 6,
      // "name": "Mrs. Dianne Parker",
      // "phone": "01145866243",
      // subject: "Biology",
      // "status": "Active",
      // paymentPrice: "966",
      // "payments": null
  }
]
const users = [
  {
    id: 1,
    name: "Ahmad Mohsen",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    paymentPrice: 99,
    
  },
  {
    id: 2,
    name: "Zoey Lang",
    end: "2023-10-13",
    phone: "01145866243",
    status: "paused",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    paymentPrice: 491,
  },
  {
    id: 3,
    name: "Jane Fisher",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    paymentPrice: 41,
  },
  {
    id: 4,
    name: "William Howard",
    end: "2023-10-13",
    phone: "01145866243",
    status: "vacation",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    paymentPrice: 24,
  },
  {
    id: 5,
    name: "Kristen Copper",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    paymentPrice: 46,
  },
  {
    id: 6,
    name: "Brian Kim",
    end: "2023-10-13",
    phone: "01145866243",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    paymentPrice: 64,
    status: "Active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    eend: "2023-10-13",
    phone: "01145866243",
    status: "paused",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    paymentPrice: 2534,
  },
  {
    id: 8,
    name: "Samantha Brooks",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    paymentPrice: 64,
  },
  {
    id: 9,
    name: "Frank Harrison",
    end: "2023-10-13",
    phone: "01145866243",
    status: "vacation",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=4",
    paymentPrice: 754,
  },
  {
    id: 10,
    name: "Emma Adams",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=5",
    paymentPrice: 765,
  },
  {
    id: 11,
    name: "Brandon Stevens",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=8",
    paymentPrice: 574,
  },
  {
    id: 12,
    name: "Megan Richards",
    end: "2023-10-13",
    phone: "01145866243",
    status: "paused",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=10",
    paymentPrice: 743,
  },
  {
    id: 13,
    name: "Oliver Scott",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=12",
    paymentPrice: 244,
  },
  {
    id: 14,
    name: "Grace Allen",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=16",
    paymentPrice: 232,
  },
  {
    id: 15,
    name: "Noah Carter",
    end: "2023-10-13",
    phone: "01145866243",
    status: "paused",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=15",
    paymentPrice: 243,
  },
  {
    id: 16,
    name: "Ava Perez",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=20",
    paymentPrice: 543,
  },
  {
    id: 17,
    name: "Liam Johnson",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=33",
    paymentPrice: 755,
  },
  {
    id: 18,
    name: "Sophia Taylor",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=29",
    paymentPrice: 342,
  },
  {
    id: 19,
    name: "Lucas Harris",
    end: "2023-10-13",
    phone: "01145866243",
    status: "paused",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=50",
    paymentPrice: 364,
  },
  {
    id: 20,
    name: "Mia Robinson",
    end: "2023-10-13",
    phone: "01145866243",
    status: "active",
    subject: "Biology",
    avatar: "https://i.pravatar.cc/150?img=45",
    paymentPrice: 845,
  },
];


const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];




export default function App() {

  const [seePop, setSeePop] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [endOfSubscription, setEndOfSubscription] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentPrice, setPaymentPrice] = useState("");
  const [payments, setPayments] = useState("");
  const [status, setStatus] = useState("Active");
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "subject",
    direction: "ascending",
  });


  const handleAddTetcher = (e: React.FormEvent) => {
    e.preventDefault();
  
    const tetcherData = {
      endOfSubscription: endOfSubscription,
      id: Math.floor(Math.random() * 1000),
      name: name,
      phone: phone,
      subject: subject,
      status: status,
      paymentPrice: Number(paymentPrice),
      payments: payments,
    };
  
    console.log(tetcherData);
  };
  

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            className="text-white"
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.id}
            name={cellValue}
          >
            {user.paymentPrice}
          </User>
        );
      case "end":
        return (
          <div className="flex flex-col text-white">
            <p className="text-bold text-small favicon">{cellValue}</p>
            {/* <p className="text-bold text-tiny favicon text-default-400">{user.phone}</p> */}
          </div>
        );
      case "status":
        return (
          <Chip className="favicon" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative text-white flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <MoreVertIcon/>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem onClick={() => setSeePop(!seePop)}>Editada</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 text-white">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%] text-white"
            placeholder="Search by name..."
            // startContent={<favicon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button  variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="favicon">
                    {(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button  variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="favicon">
                    {(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" onClick={() => setSeePop(!seePop)}>
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 text-white flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <div className="relative"> 
    {seePop && 
    <div className="w-full  h-[90vh] absolute z-50 bg-web-color text-white p-6">

      <div className="flex justify-between items-center"> 
      <h1 className="text-2xl text-blue-color font-bold">Add Tetcher </h1>
    <CloseIcon className="cursor-pointer	" color="primary"   sx={{ fontSize: 40 }} onClick={() => setSeePop(!seePop)} /> 
      </div> 
      <form >
      <div className="flex gap-6 mt-5"> 

      <Inputs  label="name" inputPleaceholder="Name Tetcher" typeInput="string"  /> 
      <Inputs label="Subjct" inputPleaceholder="Subjct" typeInput="string" /> 
      </div>
      <div className="flex gap-6 mt-5"> 
      <Inputs label="End Of Subscription" inputPleaceholder="Enter The End " typeInput="string " /> 
      <Inputs label="phone Tetcher" inputPleaceholder="phone" typeInput="number"/> 
      </div>
      <div className="flex gap-6 mt-5"> 
      <Inputs label="paymentPrice" inputPleaceholder="Enter The paymentPrice" typeInput="number" /> 
      <Inputs label="Status Tetcher" inputPleaceholder="status" typeInput="string"/> 
      </div>
      <div className="flex gap-6 mt-5 mb-5"> 
      <Inputs label="payments" inputPleaceholder="Enter The payments" typeInput="number" /> 
      </div>
      <button type="button" onClick={handleAddTetcher}>Add Tetcher</button>


      </form>

    </div>
    }
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px] text-white",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  );
}

//Update Tetcher
// "id": 3,
// "name": "Rodoo Collier",
// "phone": "01145866903",
// "subject": "Biology",
// "status": "Banded",
// "paymentPrice": 319,