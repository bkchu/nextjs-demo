import Head from "./head";
import Link from "next/link";

const links = [
  { href: "https://github.com/segmentio/create-next-app", label: "Github" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <div className="Nav__links">
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/todolist">
            <a>TodoList</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/swapi">
            <a>Swapi</a>
          </Link>
        </li>
      </div>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }

      nav {
        text-align: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        padding: 5px;
        margin-bottom: 20px;
      }

      .Nav__links {
        width: 20%;
        display: flex;
      }

      ul {
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
      }
      nav > ul {
      }
      li {
        display: flex;
        margin-right: 20px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
