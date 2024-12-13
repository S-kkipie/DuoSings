import LoginForm from "@/components/SignIn";
import { Suspense } from "react";
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="my-36">
        <LoginForm />
      </div>
    </Suspense>
  );
}
