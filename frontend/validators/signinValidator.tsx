import * as Yup from "yup";

const authSchema = Yup.object().shape({
    username: Yup.string().required("Ім'я користувача обов'язкове"),
    password: Yup.string().required("Пароль обов'язковий"),
});

export default authSchema;
