import LoginGoogle from "@/frontend/ui/Buttons/loginGoogle/LoginGoogle";
import LongPainted from "@/frontend/ui/Buttons/longPainted/LongPainted";
import Separator from "@/frontend/ui/separator/Separator";
import { signIn } from "next-auth/react";

const LowerSectionForm = () => {
    return (
        <>
            <LongPainted text="Войти" />
            <Separator />
            <LoginGoogle onClick={() => signIn("google", { callbackUrl: "/questionsPage/allQuestions" })} />
        </>
    );
};

export default LowerSectionForm;
