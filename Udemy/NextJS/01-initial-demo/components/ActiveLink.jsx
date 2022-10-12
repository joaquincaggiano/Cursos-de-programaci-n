// Hook de Next
import { useRouter } from "next/router";

// Router de Next
import Link from "next/link";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const Activelink = ({ url, text }) => {
  const {asPath} = useRouter();

  return (
    <Link href={url}>
      <a style={asPath === url ? style : null}>{text}</a>
    </Link>
  );
};
