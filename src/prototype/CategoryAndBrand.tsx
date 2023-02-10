import React from "react";
import "./CategoryAndBrand.css";

type CategoryAndBrandProps = {};

const CategoryAndBrand = (props: CategoryAndBrandProps) => {
    const categories = [
        {
            title: "스니커즈",
        },
        {
            title: "의류",
        },
        {
            title: "패션잡화",
        },
        {
            title: "boutiques",
        },
        {
            title: "스포츠",
        },
        {
            title: "게임 / 엔터",
        },
        {
            title: "테크",
        },
        {
            title: "라이프",
        },
    ];
    return (
        <div
            style={{
                width: "100%",
                height: 500,
                border: "1px solid #F0F0F0",
                borderRadius: 16,
                display: "flex",
            }}>
            <div
                className={"asdf"}
                style={{
                    width: 134,
                    height: 601,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#F5F5F5",
                }}>
                {categories.map((category, i) => {
                    let firstCategory = i === 0;
                    return (
                        <div
                            key={i}
                            style={{
                                height: 40,
                                padding: "9px 0 9px 24px",
                                marginTop: firstCategory ? 80 : 12,
                                cursor: "pointer",
                            }}>
                            <span>{category.title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryAndBrand;
