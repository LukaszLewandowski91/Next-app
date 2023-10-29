import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({ numberOfPages }: { numberOfPages: number }) => {
  const pages = new Array(numberOfPages).fill(0);
  return (
    <nav>
      <ul aria-label="pagination" className="flex justify-center space-x-4">
        {pages.map((_, index) => {
          return (
            <li key={index}>
              <ActiveLink
                href={index === 0 ? "/products" : `/products/${index + 1}`}
                className="text-blue-400 hover:text-blue-600"
                activeClassName="underline"
              >
                {index + 1}
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
