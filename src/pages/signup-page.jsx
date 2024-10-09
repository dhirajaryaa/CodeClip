import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import googleIcon from "../assets/google.svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { signUpWithEmailAndPassword } from "@/redux/slices/authSlice";

export function SignUpPage() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form inputs using formRef
    const form = formRef.current;
    const email = form["email"].value;
    const name = form["name"].value;
    const password = form["password"].value;

    dispatch(signUpWithEmailAndPassword({email,password,name}));
    formRef.current.reset();

  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form ref={formRef} onSubmit={handleSubmit}>
        <Card className="mx-auto max-w-sm w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Signup</CardTitle>
            <CardDescription>
              Enter your email below to Create a new account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Dhiraj Arya"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Signup
              </Button>
              <Button
                variant="outline"
                className="w-full flex gap-2 items-center hover:bg-blue-600"
              >
                <img
                  src={googleIcon}
                  alt="Google"
                  width={20}
                  className="shadow"
                />
                Signup with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              already have an account?
              <Link to={"/signin"} className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </section>
  );
}
