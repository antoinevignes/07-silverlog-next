import { SignupForm } from "@/components/sign-up-form";

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-[83vh] flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
