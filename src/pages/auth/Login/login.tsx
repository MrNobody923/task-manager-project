// import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Checkbox } from "@/components/ui/checkbox";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Separator } from "@/components/ui/separator";
  import { Link } from "react-router-dom";
  import { IconEye, IconEyeOff, IconLock, IconMail } from "@tabler/icons-react";
  import { useState } from "react";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
  export function Login() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      
      <div id="login-page" className="grid grid-rows-12 h-screen w-full">
        <div className="row-span-12 grid grid-cols-2">
          <div className="grid place-items-center w-full  grid-grid-cols-2">
          <Carousel className="max-w-lg w-[500px] ml-56">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
          
          </div>
  
          <div className="grid items-center justify-end mr-28 h-screen">
            <Card id="login-card" className="w-[490px] h-[500px]">
              <CardHeader>
                <CardTitle className="text-5xl font-bold font-mono">
                  Log In
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label className="text-1xl" htmlFor="name">
                        Enter Email
                      </Label>
                      <div className="group grid grid-cols-[auto_1fr_auto] items-center w-full border-rounded px-2 py-2 shadow focus-within:border-primary">
                        <IconMail className="h-5 w-5 text-muted-foreground" />
                        <Input
                          className="border-0 shadow-none focus-visible:ring-0 text-5sm"
                          id="name"
                          placeholder="Email"
                          defaultValue={"boy69@example.com"}
                        />
                      </div>
                    </div>
  
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label className="text-1xl" htmlFor="name">
                          Enter Email
                        </Label>
                        <div className="group grid grid-cols-[auto_1fr_auto] items-center w-full border-rounded px-2 py-2 shadow focus-within:border-primary">
                          <IconLock className="h-5 w-5 text-muted-foreground" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            className="border-0 shadow-none focus-visible:ring-0 text-5sm"
                            id="name"
                            placeholder="Password"
                            defaultValue={"Bayagbag123"}
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
  
                      <div className="flex items-center w-full">
                        <div className="space-x-1">
                          <Checkbox id="terms1" />
                          <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Remember Me, kapag nagiisa
                          </label>
                        </div>
  
                        <div className="text-md font-medium btn-btn-link ml-auto">
                          <Link to="../ForgotPassword">
                            <u>Forgot Password?</u>
                          </Link>
                        </div>
                      </div>
                    </div>
  
                    <div className="grid grid-cols-[1fr_auto_1fr] place-content-center h-10">
                      <Separator className="my-auto" />
                      <span>Don't have an account?</span>
                      <Separator className="my-auto" />
                    </div>
  
                    <div className="flex flex-row justify-center items-center font-bold">
                      <button className="hover:bg-success" type="submit">
                        <Link to="../create">
                          <u className="text-2xl font-mono">
                            Create Account Here
                          </u>
                        </Link>
                      </button>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-row justify-center">
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[200px] text-center"
                  to="/dashboard"
                >
                  Log In
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
  