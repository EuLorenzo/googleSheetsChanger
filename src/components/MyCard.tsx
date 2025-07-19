import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useAuth from "@/hooks/useAuth";

export function MyCard() {
  const { login } = useAuth();

  return (
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <Button variant="default" className="w-full" onClick={login}>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
