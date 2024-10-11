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
import googleIcon from "../assets/google.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  googleSignin,
  signInWithEmailAndPassword,
} from "@/redux/slices/authSlice";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

export function SignInPage() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      // Redirect to dashboard or any other page after successful login
      navigate("/dashboard");
    }
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form inputs using formRef
    const form = formRef.current;
    const email = form["email"].value;
    const password = form["password"].value;

    dispatch(signInWithEmailAndPassword({ email, password }));

    formRef.current.reset();
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} ref={formRef}>
        <Card className="mx-auto max-w-sm w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Signin</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
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
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input name="password" id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader size={28} className="animate-spin" />
                ) : (
                  "signin"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => dispatch(googleSignin())}
                className="w-full flex gap-2 items-center hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader size={28} className="animate-spin" />
                ) : (
                  <>
                    <img
                      src={googleIcon}
                      alt="Google"
                      width={20}
                      className="shadow"
                    />
                    signin with Google
                  </>
                )}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </section>
  );
}
