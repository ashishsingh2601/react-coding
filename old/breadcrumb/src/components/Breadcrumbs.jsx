import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const breadcrumbs = pathname?.split("/").filter((item) => item !== "");

  console.log(breadcrumbs);
  let breadcrumbpath = "";

  if (breadcrumbs.length === 0) return;

  return (
    <div className="breadcrumbs">
      <Link to={"/"}>Home</Link>
      {breadcrumbs?.map((breadcrumb, index) => {
        breadcrumbpath += `/${breadcrumb}`;
        const isLastBreadCrumb = index === breadcrumbs.length - 1;

        return isLastBreadCrumb ? (
          <span> / {breadcrumb}</span>
        ) : (
          <span key={breadcrumb}>
            / <Link to={breadcrumbpath}>{breadcrumb}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
