import AuthForm from "@/components/Forms/AuthForm";
import styles from "@/styles/signin.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Signin() {
    const session = await getServerSession();

    if (session) {
        redirect("/");
    }

    return (
        <div className={styles.container}>
            <AuthForm />
        </div>
    );
}
