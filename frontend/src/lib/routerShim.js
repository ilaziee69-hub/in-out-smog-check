import NextLink from "next/link";
import { useRouter } from "next/router";

export function Link({ to, href, children, ...props }) {
  return <NextLink href={href || to || "/"} {...props}>{children}</NextLink>;
}

export function NavLink({ to, href, end, className, children, ...props }) {
  const router = useRouter();
  const target = href || to || "/";
  const pathname = router.pathname;
  const isActive = end ? pathname === target : pathname === target || (target !== "/" && pathname.startsWith(target));
  const cls = typeof className === "function" ? className({ isActive }) : className;
  return <NextLink href={target} className={cls} {...props}>{children}</NextLink>;
}

export function useLocation() {
  const router = useRouter();
  const [path, hash = ""] = (router.asPath || router.pathname || "/").split("#");
  return { pathname: path.split("?")[0], hash: hash ? `#${hash}` : "", search: path.includes("?") ? `?${path.split("?")[1]}` : "" };
}

export function useNavigationType() { return "PUSH"; }
export function BrowserRouter({ children }) { return children; }
export function Routes({ children }) { return children; }
export function Route() { return null; }
