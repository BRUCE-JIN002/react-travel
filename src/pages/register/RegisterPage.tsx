import React from "react";
import { UserLayout } from "../../layouts/userlayout";
import { Form } from "antd";
import { RegisterForm } from "./RegisterForm";

export const RegisterPage : React.FC = () =>  {
    return (
        <UserLayout>
            <RegisterForm/>
        </UserLayout>
    )
} 