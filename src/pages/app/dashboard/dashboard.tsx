import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { IconSearch, IconTrash, IconPencil } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Checkbox } from "@/components/ui/checkbox";
import Service from "@/Service";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Dashboard = () => {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUsers = () => {
    return Service.getUsers();
  };

  const removeUser = (id: number) => {
    Service.removeUser(id)
      .then((response) => {
        retrieveUsers();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const retrieveUsers = () => {
    Service.getUsers()
      .then((response: any) => {
        setUsers(response.data);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    retrieveUsers();
  }, []);
  const getUserId = async (id: number) => {
    await users.find((user: any) => {
      if (user.id === id) {
        setName(user.name);
        setEmail(user.email);
        // setPassword(user.password);
      }
    });
  };

  const updateData = async (id: number) => {
    await Service.updateUser(id, { name, email, password })
      .then((response) => {
        setIsOpen(false);
        getUsers().then((res) => setUsers(res.data));
        console.log(response.data);
        retrieveUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div id="dashboard-page" className="max-w-screen h-screen">
      <div className="p-5">
        <div className="flex justify-between gap-6">
          {/* <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 text-center"
            to={"/"}
          >
            Back
          </Link> */}

          <div className="flex ml-auto">
            <div
              id="dashboard-search-bar"
              className="group grid grid-cols-[auto_1fr_auto] place-items-center w-[300px] px-2 py-2"
            >
              <IconSearch className="h-5 w-5 text-muted-foreground" />
              <Input
                className="border-0 shadow-none focus-visible:ring-0 text-5sm"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>

          <div id="dashboard-avatar">
            <Sheet>
              <SheetTrigger asChild>
                <Avatar>
                  <AvatarImage src="./src/assets/profile.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div
        className="grid mt-5"
        id="dashboard-table"
        style={{
          borderRadius: "15px",
          border: "1px solid gray",
          padding: "8px",
          width: "90%",
        }}
      >
        <div className="flex justify-between gap-6 ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Password</TableHead>
                <TableHead className="text-center ">Status</TableHead>
                <TableHead className="text-center ">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <div className="grid grid-cols-2 items-center w-12 gap-4">
                      <div>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button variant={"ghost"} className="w-12">
                              <IconTrash />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => removeUser(user.id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>

                      <Dialog onOpenChange={setIsOpen} open={isOpen}>
                        <DialogTrigger
                          asChild
                          onClick={() => getUserId(user.id)}
                        >
                          <Button variant={"ghost"} className="w-12">
                            <IconPencil></IconPencil>
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Update User</DialogTitle>
                            <DialogDescription>
                              Make changes here.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid py-4 gap-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text=right">
                                Name
                              </Label>
                              <Input
                                id="name"
                                value={name}
                                className="col-span-3"
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="email" className="text=right">
                                Email
                              </Label>
                              <Input
                                id="email"
                                value={email}
                                className="col-span-3"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button
                              type="button"
                              onClick={() => updateData(user.id)}
                            >
                              Save Changes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
