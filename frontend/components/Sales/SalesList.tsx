import { ComponentPropsWithoutRef, FC, Fragment } from "react";
import classnames from "classnames";
import { ISaleCart } from "@/types/Market";
import SaleItem from "./SaleItem";

interface SalesListProps extends ComponentPropsWithoutRef<"div"> {
    saleItems: ISaleCart[];
}

const SalesList: FC<SalesListProps> = ({
    children,
    className,
    saleItems,
    ...rest
}) => {
    return (
        <Fragment>
            {children}
            <div
                {...rest}
                className={classnames("flex flex-row flex-wrap", className)}
            >
                {saleItems.map((saleItem, idx) => {
                    return <SaleItem key={idx} saleData={saleItem} />;
                })}
            </div>
        </Fragment>
    );
};

export default SalesList;
