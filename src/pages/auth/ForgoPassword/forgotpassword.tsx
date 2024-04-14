
import Service from "@/Service";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { IconEye, IconEyeOff, IconLoader2, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const getUser = async (e: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      e.preventDefault();
      Service.addUser({ name, email})
        .then((response: any) => {
          if (response.status === 201) {
            toast.success("User found!");
          } else {
            toast.error("Could not find user!");
          }
        })
        .catch((_error: any) => {
            toast.error("User already exists");
        });
    }, 1000);
  };
  return (
    <div id="forgot-page" className="w-screen h-screen">
        <div className="flex justify-end gap-2 items-center bg-white h-14">
        <Input className="w-60 h-10 bg-white font-medium hover:" type="email or phone" placeholder="Email or Phone" />
        <Input className="w-60 h-10 mr- bg-white font-medium" type ="password" placeholder="Password"/>
        <Button variant="outline" className="bg-blue-500  hover:bg-blue-700 text-white w-20 h-10 mr-5">
              <Link to={"/"} className="text-white">Log in</Link>
            </Button>
        </div>
      <div className="grid place-items-center h-screen">
        <Card id="forgot-card" className="w-[550px]">
          <CardHeader>
            <CardTitle className=" text-3xl">Find your account</CardTitle>
          </CardHeader>
          <Separator></Separator>
          <CardContent>
            <form className="space-y-2">
              <div className="grid w-full items-center gap-4"></div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-lg h-[60px]">
                Please enter your email or phone number to search for your account.
                </Label>
                
                {/* Name */}
                <Input
                  id="name"
                  placeholder="Email or phone number"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="h-12"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Button variant="outline" className="w-[100px] px-0 py-0 bg-slate-200">
              <Link to={"/auth/login"} className="px-0 py-0 w-[100px] h-full grid items-center">Cancel</Link>
            </Button>

            <Button
              id="search"
              onClick={getUser}
              disabled={loading}
              className="bg-blue-500  hover:bg-blue-700 text-white  w-[100px]"
            >
              {loading ? (
                <div className="flex items-center flex-row">
                  <IconLoader2 className="animate-spin h-4 w-4" />
                  Searching for Account
                </div>
              ) : (
                "Search"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
