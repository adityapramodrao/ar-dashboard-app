import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && x !== "dashboard");

  return (
    <nav className="text-sm mt-2 text-bold text-gray-500">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            to="/dashboard"
            className="hover:text-purple-600 font-medium"
          >
            Dashboard
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo =
            "/dashboard/" + pathnames.slice(0, index + 1).join("/");

          const isLast = index === pathnames.length - 1;

          return (
            <li key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-700 font-semibold capitalize">
                  {name}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-purple-600 capitalize"
                >
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
