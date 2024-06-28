import * as Yup from "yup";

const addSaleSchema = Yup.object().shape({
    brand: Yup.string().required("Обов'язкове поле"),
    model: Yup.string().required("Обов'язкове поле"),
    v_type: Yup.string().required("Обов'язкове поле"),
    region: Yup.string().required("Обов'язкове поле"),
    year: Yup.number().min(1900).max(2024).required("Обов'язкове поле"),
    color: Yup.string().max(50).required("Обов'язкове поле"),
    vehicle_description: Yup.string().max(2000),
    price: Yup.number().min(10).max(5000000).required("Обов'язкове поле"),
    vin_code: Yup.string().max(50).required("Обов'язкове поле"),
});

export default addSaleSchema;
