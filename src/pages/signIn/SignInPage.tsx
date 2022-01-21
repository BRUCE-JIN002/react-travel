import React from "react";
import { UserLayout } from "../../layouts/userlayout";
import { SignInForm } from "./SignInForm";

export const SignInPage : React.FC = (props) => {
    console.log(props);
    return (
        <UserLayout>
            <SignInForm />
        </UserLayout>
    );
} 