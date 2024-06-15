import * as Yup from "yup";

const editPhoneNumberSchema = Yup.object().shape({
    phoneNumber: Yup.number().required("Обов'язкове значення"),
});

export default editPhoneNumberSchema;
