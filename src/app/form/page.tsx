import RegistrationForm from "@/components/form-component";

export default function FormPage() {

    return (
        <div className="flex flex-col items-center min-h-screen gap-16 p-10 font-[family-name:var(--font-geist-sans)]">
            <p className="text-6xl font-semibold">Form Register</p>
        <div className="w-80">
        <RegistrationForm />
        </div>
    </div>
    )
}