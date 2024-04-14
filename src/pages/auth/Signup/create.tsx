/* eslint-disable @typescript-eslint/no-explicit-any */
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
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { IconEye, IconEyeOff, IconLoader2, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export function Create() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const createUser = async (e: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      e.preventDefault();
      Service.addUser({ name, email, password })
        .then((response: any) => {
          if (response.status === 201) {
            toast.success("User created successfully");
          } else {
            toast.error("User already exists");
          }
        })
        .catch((_error: any) => {
            toast.error("User already exists");
        });
    }, 1000);
  };
  return (
    <div id="create-page">
      <div className="grid place-items-center w-screen h-screen">
        <Card id="create-card" className="w-[550px]">
          <CardHeader>
            <CardTitle className=" text-3xl">Create an acccount</CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-2">
              <div className="grid w-full items-center gap-4"></div>
              <div className="flex flex-col space-y-1.5">
                {/* Name */}
                <Label className="text-1xl" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              {/* Email */}

              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className="text-1xl" htmlFor="name">
                    Email
                  </Label>
                  <Input
                    id="name"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              {/* Password */}

              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className="text-1xl" htmlFor="name">
                    Password
                  </Label>
                  <div className="group grid grid-cols-[auto_1fr_auto] items-center w-full border-rounded px-1 py-1 shadow focus-within:border-primary">
                        <IconLock className="h-5 w-5 text-muted-foreground" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="border-0 shadow-none focus-visible:ring-0 text-5sm"
                          id="name"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <IconEye className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <IconEyeOff className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                </div>

                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-1xl" htmlFor="name">
                      Contact Number
                    </Label>
                    <Input id="name" placeholder="Contact" />
                  </div>

                  <div className="grid grid-cols-[1fr_auto_1fr] place-content-center h-10">
                    <Separator className="my-auto" />
                    <span>or signup using:</span>
                    <Separator className="my-auto" />
                  </div>
                </div>
                {/* svg-links */}
                <div className="flex items-center justify-center gap-16">
                  <div className="space-x-1">
                    <Link to="https://www.google.com/" target="_blank">
                      <Button variant="outline" className="py-7 px-7 ">
                        <img
                          src="/src/assets/google.svg"
                          alt="google"
                          className="size-9"
                        />
                        Google
                      </Button>
                    </Link>
                  </div>

                  <div className="">
                    <Button variant="outline" className="py-7 px-4 ">
                      <Link to={"https://www.facebook.com/"} target="_blank">
                        <img
                          src="/src/assets/facebook.svg"
                          alt="facebook"
                          className="size-11"
                        />
                      </Link>
                      Facebook
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="w-[100px] px-0 py-0">
              <Link to={"/auth/login"} className="px-0 py-0 w-[100px] h-full grid items-center">Back to Log In</Link>
            </Button>
            <Button
              id="login"
              onClick={createUser}
              disabled={loading}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-[150px]"
            >
              {loading ? (
                <div className="flex items-center flex-row">
                  <IconLoader2 className="animate-spin h-4 w-4" />
                  Creating Account
                </div>
              ) : (
                "Create"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
