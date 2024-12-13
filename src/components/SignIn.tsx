"use client";
import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function SignInForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams?.get("message") === "authentication_required") {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You need to be logged in to access this page.",
      });
    }
  }, [searchParams]);
  const handleGoogleLogin = async () => {
    const result = await signIn("google", { callbackUrl: "/learn" });
    console.log(result);
  };
  const handleGithubLogin = async () => {
    const result = await signIn("github", { callbackUrl: "/learn" });
    console.log(result);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-sm space-y-8 px-4">
        <div className="space-y-2 text-center">
          <h2 className="text-primary text-3xl font-bold">Iniciar sesión</h2>
          <p>Elige un proveedor para iniciar sesión</p>
        </div>
        <div className="space-y-4">
          <Button
            className="w-full"
            onClick={handleGithubLogin}
          >
            <Github className="mr-2 h-5 w-5" />
            Continuar con GitHub
          </Button>
          <Button
            className="w-full"
            onClick={handleGoogleLogin}
          >
            <Mail className="mr-2 h-5 w-5" />
            Continuar con Google
          </Button>
        </div>
        <p className="text-sm text-center mt-8">
          Al iniciar sesión, aceptas nuestros{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            términos de servicio
          </a>{" "}
          y{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            política de privacidad
          </a>
          .
        </p>
      </div>
    </div>
  );
}
